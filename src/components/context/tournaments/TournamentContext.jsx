import { createContext, useReducer } from 'react'
import tournamentReducer from './TournamentReducer'

const TournamentContext = createContext()

export const TournamentProvider = ({ children }) => {
  const initialState = {
    tournaments: [],
    tournament: {},
    users: [],
    user: {},
    participants: [],
    loading: false,
    isGameStarted: false
  }

  const [state, dispatch] = useReducer(tournamentReducer, initialState)

  return (
    <TournamentContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TournamentContext.Provider>
  )
}

export default TournamentContext
