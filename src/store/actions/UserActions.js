import * as types from './actionTypes' 
import UserApi from '../../api/UserApi'
import UserUtils from '../../utils/UserUtils'

class UserActions {

      static updateLastAction() { 
        return {
        type: 'UPDATE_LAST_ACTION'
        }
      }
      
      static updateUserInfo(name, value) { 
        return function (dispatch)  {
          dispatch({ type: types.UPDATE_USER_INFO, name: name, value: value })
          dispatch(UserActions.updateLastAction())
        }
      }
  
      static updateMail(value) { 
        return function (dispatch)  {
         dispatch(UserActions.updateUserInfo('cov_mail',value))
        }
     }

      static updateFirstName(value) { 
        return function (dispatch)  {
        dispatch(UserActions.updateUserInfo('cov_first_name',value))
        }
      }

      static updateLastName(value) { 
          return function (dispatch)  {
          dispatch(UserActions.updateUserInfo('cov_last_name',value))
          }
      }

      static updateBirth(value) { 
        return function (dispatch)  {
        dispatch(UserActions.updateUserInfo('cov_birth',value))
        }
      }

      static updateGender(value) { 
        return function (dispatch)  {
        dispatch(UserActions.updateUserInfo('cov_gender',value))
        }
      }

      static updateCity(value) { 
        return function (dispatch)  {
        dispatch(UserActions.updateUserInfo('cov_city',value))
        }
      }

      static updatePassword(value) { 
        return function (dispatch)  {
        dispatch(UserActions.updateUserInfo('cov_password',value))
        }
      }

      static updatePhone(value) { 
        return function (dispatch)  {
        dispatch(UserActions.updateUserInfo('cov_phone',value))
        }
      }

      static updatePicture(value) { 
        return function (dispatch)  {
        dispatch(UserActions.updateUserInfo('cov_picture',value))
        }
      }

      static checkMail(data) {  
        return function(dispatch) {
          return UserApi.checkMail(data)
            .then(response => {
              dispatch(UserActions.updateMail(data))
            }).catch(error => {
                throw(error)
            })
        }
      }

      static saveUser(cov_user) {  
        return function(dispatch) {
          return UserApi.createAccount(cov_user)
            .then((response) => {
              dispatch(UserActions.updateLastAction())
            })
            .catch(error => {
                throw(error)
            })
        }
      }

      static connectUserSuccess(token, value) { 
        return {
          type: types.CONNECT, 
          value: value,
          token: token
        }
      }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

      static connectUser(email, password) {  
        return function(dispatch) {
          let cov_user  = { 'cov_email' : email, 'cov_password' : password }
          return UserApi.connect(cov_user)
            .then(response => {
              let token = response.data.tokenType + ' ' + response.data.accessToken
              return UserApi.readAccount(email, token)
                    .then(response2 => {                           
                        let user = UserUtils.mappingData(response2.data);
                        dispatch(UserActions.connectUserSuccess(token, user));
                        dispatch(UserActions.updateLastAction());
                    }).catch(error => {
                        throw(error)
                    })
            }).catch(error => {
                throw(error)
            })
        }
      }

      static updataUserSuccess(value) { 
        return {
          type: types.UPDATE_USER, 
          value: value
        }
      }

      static updateUser(cov_user, token) {  
        return function(dispatch) {
          return UserApi.updateAccount(cov_user, token)
            .then(response => {
                dispatch(UserActions.updataUserSuccess(UserUtils.mappingData(response.data)))
                dispatch(UserActions.updateLastAction())
            }).catch(error => {
                throw(error)
            })
        }
      }

      static uploadPicture(user_email, imagePreviewUrl, file, token){
        return function(dispatch) {
          return UserApi.uploadPicture(user_email, file, token)
            .then(response => {
                dispatch(UserActions.updatePicture(imagePreviewUrl));
            }).catch(error => {
                throw(error)
            })
        }
      }

      static updateUserPassword(cov_user, token) {   
        return function(dispatch) {
        let data  = { 'cov_mail' : cov_user.cov_mail, 'cov_password' : cov_user.cov_password }
          return UserApi.updatePassword(data, token)
            .then(response => {
                dispatch(UserActions.updateLastAction())
                return response
            }).catch(error => {
                throw(error)
            })
        }
      }

      static logout() { 
        return {
          type: types.INIT_STATE
        }
       
      }

      static forgotPassword(mail) {  
        let cov_mail = {'cov_mail': mail}
        return function(dispatch) {
          return UserApi.forgotPassword(cov_mail)
            .then(response => {
              dispatch(UserActions.updateLastAction())
              return response
            })
            .catch(error => {
                throw(error)
            })
        }
      }
      static initPassword(cov_user, token) {  
        let data  = { 'cov_mail' : cov_user.cov_mail, 'cov_password' : cov_user.cov_password, 'token':token }
        return function(dispatch) {
          return UserApi.initPassword(data)
            .then(response => {
              dispatch(UserActions.updateLastAction())
              return response
            })
            .catch(error => {
                throw(error)
            })
        }
      }

      static validateUser(cov_user) {  
        return function(dispatch) {
          return UserApi.validateAccount(cov_user)
            .then((response) => {
              dispatch(UserActions.updateLastAction())
            })
            .catch(error => {
                throw(error)
            })
        }
      }

      static setPathName(pathname) { 
        return {
          type: types.SET_PATHNAME,
          value: pathname
        }
       
      }

}

export default UserActions