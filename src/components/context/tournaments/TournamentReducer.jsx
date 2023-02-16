const tournamentReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TOURNAMENTS':
      return {
        ...state,
        tournaments: action.payload,
        loading: false,
      }
    case 'GET_TOURNAMENT':
      return {
        ...state,
        tournament: action.payload,
        loading: false,
      }
      case 'GET_LEADERBOARD':
        return {
          ...state,
          participants: action.payload,
          loading: false,
        }
    case 'SET_PARTICIPANTS':
      let newParticipants = [];
      action.payload.map(user => {
        newParticipants.push({ 'username': user.username, 'score': 0 });
      });
      return {
        ...state,
        participants: newParticipants,
        loading: false,
      }
    case 'SET_PARTICIPANT':
      const updatedParticipants = action.payload.participants.map(participant => {
        if (participant.username === action.payload.participant.username) {
          return {
            username: participant.username,
            score: participant.score + action.payload.participant.score,
          };
        } else {
          return participant;
        }
      });

      return {
        ...state,
        participants: updatedParticipants,
        loading: false,
      };
    case 'GET_TOURNAMENT_AND_USERS':
      return {
        ...state,
        tournament: action.payload,
        users: action.payload.users,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'SET_GAME_STARTED':
      return {
        ...state,
        isGameStarted: true,
      }
    case 'CLEAR_TOURNAMENTS':
      return {
        ...state,
        tournaments: [],
      }
      case 'CLEAR_LEADERBOARD':
        return {
          ...state,
          participants: [],
        }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      }
    case 'CLEAR_PARTICIPANTS':
      return {
        ...state,
        isGameStarted: false,
        tournaments: [],
      }
    default:
      return state
  }
}

export default tournamentReducer
