import PlayerCard from "../components/tournaments/PlayerCard";
import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { getLeaderboard } from "../components/context/tournaments/TournamentActions";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import TournamentContext from "../components/context/tournaments/TournamentContext";
import Leaderboard from "../components/tournaments/LeaderboardEntry";

function LeaderboardScreen() {
  const { participants, loading, dispatch } = useContext(TournamentContext)
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    
    const getLeaderboardData = async () => {
      const leaderboard = await getLeaderboard(params.id);

      dispatch({ type: 'GET_LEADERBOARD', payload: leaderboard });
    };

    getLeaderboardData();

    return () => {
      dispatch({ type: 'CLEAR_LEADERBOARD', payload: participants });
    }
  }, []);

  const renderLeaderboard = () => {
    if(!participants || participants.length === 0){
      return <p>No data available.</p>
    }

    return (<Leaderboard leaderboard={participants} />);
  };

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div class="h-screen">
      {renderLeaderboard()}
    </div>
  )
}

export default LeaderboardScreen;
