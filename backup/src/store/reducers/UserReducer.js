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
    
      case types.SAVE_USER: 
        nextState = {
          ...state,
          cov_user : {...initialState.cov_user }
        }
      return nextState || state

      case types.CONNECT:
        nextState = {
          ...state,
          auth : {logged: true, token: action.token },
          cov_user : action.value,
          create_date : Date.now()
        }
      return nextState || state

      case types.INIT_STATE:
        nextState = {
          ...state,
          auth: { logged: false, token: '' },
          cov_user: {...initialState.cov_user},
          create_date : ''
        }
    return nextState || state
       
  default:
    return state
  }
}

export default loginReducer