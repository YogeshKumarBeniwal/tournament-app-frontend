import BaseHttpService from '../../common/base-http.service'
import { io } from 'socket.io-client';

const server = new BaseHttpService();

export const socketIOUrl = `ws://localhost:3000/tournaments`;

const socket = io(socketIOUrl, {
  auth: {
    token: server.accessToken,
  }
});

export const joinTournament = (id, callback) => {
socket.on('tournament_joined', callback);
socket.emit('join_tournament', { id });
};

export const subscribeToTournamentStart = (callback) => {
socket.on('tournament_start', callback);
};

export const subscribeToTournamentEnd = (callback) => {
socket.on('tournament_end', callback);
};

export const subscribeToScoreChange = (callback) => {
socket.on('score_updated', callback);
};
