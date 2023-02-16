import PlayerCard from "../components/tournaments/PlayerCard";
import { useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { joinTournamentLobby, getTournament, leaveTournamentLobby } from "../components/context/tournaments/TournamentActions";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import TournamentContext from "../components/context/tournaments/TournamentContext";

function GameLobby() {
  const { tournament, users, loading, dispatch } = useContext(TournamentContext)
  const navigate = useNavigate();
  const params = useParams();
  let isGameStarted = false;
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const tournament = await getTournament(params.id);

      dispatch({ type: 'GET_TOURNAMENT', payload: tournament });
    };

    getUserData();
  }, []);

  useEffect(() => {
    joinTournamentLobby(params.id, onTournamentJoin, onTournamentStart, onTournamentConnectionFail)

    function onTournamentJoin(tournament) {
      dispatch({ type: 'GET_TOURNAMENT_AND_USERS', payload: tournament });
    }

    function onTournamentStart(tournament) {
      dispatch({ type: 'SET_GAME_STARTED' });
      isGameStarted = true;
      dispatch({ type: 'SET_PARTICIPANTS', payload: tournament.users });
      navigate(`/game`);
    }

    function onTournamentConnectionFail(tournament) {
      leaveTournamentLobby();
      navigate('/');
    }

    return () => {
      if(!isGameStarted){
        leaveTournamentLobby();
      }
    }
  }, []);

  const renderUsers = () => {
    if (!users || users.length === 0) {
      return <p>Waiting for users...</p>
    }

    return users.map(user => {
      return (<PlayerCard key={user.id} user={user} />);
    });
  };

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="flex h-screen flex-col items-center rounded-lg shadow-lg bg-blue p-8 max-w-screen-md mx-auto">
      <img src={tournament.icon} alt="Tournament icon" className="w-32 h-32 rounded-full mb-8" />
      <h2 className="text-2xl font-bold mb-4">{tournament.title}</h2>
      <p className="text-sm mb-4">{users.length}/{tournament.maxParticipant} players joined</p>
      <div className="flex-1 h-64 overflow-y-auto">
        {renderUsers()}
      </div>
      <button className="btn btn-red mt-8 hover:text-white hover:bg-red-600 active:bg-red-800">
        <i className="fas fa-times mr-2"></i>
        <Link to={`/`}>
          Leave Tournament
        </Link>
      </button>
    </div>
  )
}

export default GameLobby;
