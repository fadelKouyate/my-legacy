import * as types from '../actions/actionTypes';  
import initialState from '../initialState';

function loginReducer(state = initialState, action) {
  console.log("action ",action)
  let nextState = {}
  switch (action.type) {
        
    case types.UPDATE_USER_INFO:
        var name = action.name
        var value = action.value
        var cov_user = {...state.cov_user } 
        cov_user[name] = value
        nextState = {
          ...state,
          cov_user : cov_user
        }
      return nextState || state

      case types.UPDATE_USER:
        nextState = {
          ...state,
          cov_user : action.value
        }
      return nextState || state

      case types.CONNECT:
        nextState = {
          ...state,
          auth : {logged: true, token: action.token },
          cov_user : action.value
        }
      return nextState || state

      case types.INIT_STATE:
      return initialState

      case types.UPDATE_LAST_ACTION:
        nextState = {
          ...state,
          action_date : Date.now()
        }
      return nextState || state

      case types.SET_PATHNAME:
        nextState = {
          ...state,
          pathname : action.value
        }
      return nextState || state

      case types.SET_TRIPS:
        nextState = {
          ...state,
          cov_trips : action.value
        }
      return nextState || state

      case types.SET_CURRENT_TRIP:
        nextState = {
           ...state,
           cov_current_trip : action.value
        }
      return nextState || state

      case types.SET_TRIP_DESIRED_PLACE:
        nextState = {
           ...state,
           cov_trip_placeDesired : action.value
        }
      return nextState || state

  default:
    return state
  }
}

export default loginReducer