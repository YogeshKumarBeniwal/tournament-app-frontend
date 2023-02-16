import { useContext, useEffect, useState } from 'react';
import { addScore, joinGame, leaveTournamentLobby } from '../components/context/tournaments/TournamentActions';
import TournamentContext from "../components/context/tournaments/TournamentContext";
import { useParams, Link, useNavigate } from 'react-router-dom'

const PlayerCard = ({ username, score }) => (
  <div className="flex items-center mb-3">
    <img src=""
      alt={username} className="w-10 h-10 rounded-full mr-3" />
    <div>
      <h3 className="font-bold">{username}</h3>
      <p className="text-xs text-gray-600">Score: {score}</p>
    </div>
  </div>
);

function GameScreen() {
  const { tournament } = useContext(TournamentContext)
  const navigate = useNavigate();

  const [score, changeScore] = useState(0);

  useEffect(() => {
    joinGame(tournament.id, onScoreChange, onGameEnd)

    function onScoreChange(participant) {
      // dispatch({ type: 'SET_PARTICIPANT', payload: {participants, participant} });
    }

    function onGameEnd(result) {
      navigate(`/leaderboard/${tournament.id}`);
    }

    return () => {
      leaveTournamentLobby();
    }
  }, []);

  // const renderParticipants = () => {
  //   if (!participants || participants.length === 0) {
  //     return <p>Waiting for Participants...</p>
  //   }

  //   return participants.map(participant => {
  //     return (<PlayerCard key={participant.username} {...participant} />)
  //   });
  // };

  const handleClick = (id) => {
    const newScore = score +1;
    changeScore(newScore);
    addScore({ "score": 1 });
  };

  // const maxScore = tournament.scoreToWin;

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-100">
      <div className="flex-1 flex flex-col justify-center items-center">
        
      <img
          src={tournament.icon}
          alt="Tournament Icon"
          className="w-40 h-40 object-contain rounded-full"
        />
        <h1 className="text-5xl font-bold text-center mb-6">Score: {score}</h1>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mb-6"
          onClick={() => handleClick()}
        >
          <svg className="h-6 w-6 inline-block mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
            />
          </svg>
          Score
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
