import BaseHttpService from '../../common/base-http.service'
import { io } from 'socket.io-client';

const socketIOUrl = `ws://localhost:3000/tournaments`;
const server = new BaseHttpService();
let socket

export const getAllTournaments = async () => {
  const response = await server.get('tournaments');
  return response?.data ?? undefined
}

export const getTournament = async (id) => {
  const response = await server.get(`tournaments/${id}`);
  return response?.data ?? undefined
}

export const getLeaderboard = async (id) => {
  const response = await server.get(`tournaments/leaderboards/${id}`);
  return response?.data ?? undefined
}

export const getAllGames = async () => {
  const response = await server.get('games');
  return response?.data ?? undefined
}

export const joinTournamentLobby = (id, joinedCallback, startCallback, failCallback) => {
  socket = io(socketIOUrl, {
    auth: {
      token: server.accessToken,
    },
    extraHeaders:{
      "tournamentid": id,
    }
  });

  socket.on('tournament_joined', joinedCallback);
  socket.on('tournament_start', startCallback);
  socket.on("connect_error", failCallback);
};

export const joinGame = (id, addScoreCallback, tournamentEndCallback) => {
  // socket = io(socketIOUrl, {
  //   auth: {
  //     token: server.accessToken,
  //   },
  //   extraHeaders:{
  //     "tournamentid": id,
  //   }
  // });

  socket.on('tournament_end', tournamentEndCallback);
  socket.on('score_updated', addScoreCallback);
};

export const addScore = (score) => {
  socket.emit('add_score', score);
};

export const leaveTournamentLobby = () => {
  socket.disconnect();
};