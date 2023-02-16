import { createContext, useReducer } from 'react'
import tournamentReducer from './TournamentReducer'

const GameContext = createContext()

export const TournamentProvider = ({ children }) => {
  const initialState = {
    tournament,
    participent: [],
    loading: false
  }

  const [state, dispatch] = useReducer(tournamentReducer, initialState)

  return (
    <GameContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
