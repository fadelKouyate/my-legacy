import * as types from './actionTypes' 
import UserApi from '../../api/UserApi'
import UserUtils from '../../utils/UserUtils'

export function updateMail(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_mail',
      value: value
    }
}

export function updateFirstName(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_first_name',
      value: value
    }
}

export function updateLastName(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_last_name',
      value: value
    }
}

export function updateBirth(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_birth',
      value: value
    }
}

export function updateGender(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_gender',
      value: value
    }
}

export function updateCity(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_city',
      value: value
    }
}

export function updatePassword(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_password',
      value: value
    }
}

export function updatePhone(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_phone',
      value: value
    }
}

export function updatePicture(value) { 
    return {
      type: types.UPDATE_USER_INFO, 
      name: 'cov_picture',
      value: value
    }
}

export function checkMail(data) {  
  return function(dispatch) {
    return UserApi.checkMail(data)
	    .then(response => {
         dispatch(updateMail(data))
	    }).catch(error => {
          throw(error)
	    })
  }
}

export function saveUserSuccess() { 
    return {
      type: types.SAVE_USER, 
    }
}

export function saveUser(cov_user) {  
  return function(dispatch) {
    return UserApi.createAccount(cov_user)
	    .then(response => {
          dispatch(saveUserSuccess())
	    }).catch(error => {
          throw(error)
	    })
  }
}

export function connectUserSuccess(token, value) { 
  return {
    type: types.CONNECT, 
    value: value,
    token: token
  }
}

export function connectUser(email, password) {  
  return function(dispatch) {
    let cov_user  = { 'cov_email' : email, 'cov_password' : password }
    return UserApi.connect(cov_user)
	    .then(response => {
        let token = response.data.tokenType + ' ' + response.data.accessToken
        return UserApi.readAccount(email, token)
              .then(response2 => {           
                dispatch(connectUserSuccess(token, UserUtils.mappingData(response2.data)))
              }).catch(error => {
                  throw(error)
              })
         
	    }).catch(error => {
          throw(error)
	    })
  }
}

export function updataUserSuccess(value) { 
  return {
    type: types.UPDATE_USER, 
    value: value
  }
}

export function updateUser(cov_user, token) {  
  return function(dispatch) {
    return UserApi.updateAccount(cov_user, token)
	    .then(response => {
          dispatch(updataUserSuccess(UserUtils.mappingData(response.data)))
	    }).catch(error => {
          throw(error)
	    })
  }
}

export function updateUserPassword(cov_user, token) {   
  return function(dispatch) {
   let data  = { 'cov_mail' : cov_user.cov_mail, 'cov_password' : cov_user.cov_password }
    return UserApi.updatePassword(data, token)
	    .then(response => {
          return response
	    }).catch(error => {
          throw(error)
	    })
  }
}