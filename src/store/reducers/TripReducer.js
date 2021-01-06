import * as types from '../actions/actionTypes';  
import initialState from '../initialState';

function tripReducer(state = initialState, action) {
  console.log("action -->set la to reducer",action)
  let nextState = {}
  switch (action.type) {
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

  default:
    return state
  }
}

export default tripReducer