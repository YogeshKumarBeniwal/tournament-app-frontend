import { useContext, useEffect } from 'react';
import { getAllTournaments } from '../context/tournaments/TournamentActions';
import TournamentContext from '../context/tournaments/TournamentContext';
import LoadingSpinner from '../layout/LoadingSpinner';
import TournamentCard from './TournamentCard';

function TournamentsGrid() {
  const { tournaments, loading, dispatch } = useContext(TournamentContext)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const tournaments = await getAllTournaments();
      dispatch({ type: 'GET_TOURNAMENTS', payload: tournaments });
    };
  
    getUserData();
  }, []);

  const renderTournaments = () => {
    if(!tournaments || tournaments.length === 0){
      return <p>No Tournament available.</p>
    }

    return tournaments.map(tournament => {
      return (<TournamentCard key={tournament.id} tournament={tournament} />);
    });
  };


  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tournaments</h2>
      <div className="justify-center">
      <div className="flex flex-wrap -mx-3">
        {renderTournaments()}
      </div>
    </div>
    </div>

  )
}

export default TournamentsGrid;
