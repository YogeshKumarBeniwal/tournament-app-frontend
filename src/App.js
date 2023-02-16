import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Navbar from "./components/layout/Navbar";
import GameLobby from './pages/GameLobby';
import GameScreen from './pages/GameScreen';
import { TournamentProvider } from './components/context/tournaments/TournamentContext';
import LeaderboardScreen from './pages/LeaderboardScreen';

function App() {
  return (
    <>
    <TournamentProvider>
      <Navbar />
      <Router>
        {/* <div className='flex flex-col justify-between h-screen'> */}

        {/* <main className='container mx-auto px-3 pb-12'> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lobby/:id' element={<GameLobby />} />
          <Route path='/leaderboard/:id' element={<LeaderboardScreen />} />
          <Route path='/game' element={<GameScreen />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/user/:login' element={<User />} /> */}
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* </main> */}

        {/* </div> */}
      </Router>
      <Footer />
      
      
    </TournamentProvider>
    </>
  );
}

export default App;
