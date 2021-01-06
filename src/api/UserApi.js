import {API_URL, WS_CONNECT, WS_CREATE_ACCOUNT, WS_UPDATE_ACCOUNT,WS_UPLOAD_PICTURE, WS_READ_ACCOUNT, } from './url';
import {WS_VALIDATE_ACCOUNT, WS_CHECK_EMAIL, WS_CHANGE_PASSWORD, WS_INIT_PASSWORD, WS_FORGOT_PASSWORD} from './url';
import axios from 'axios';
import HttpStatus  from 'http-status-codes';

class UserApi {  

  static handleError(error) {
    console.log("Axios err donne la valeur: ", error)
      let errorObject=JSON.parse(JSON.stringify(error));
      let message = errorObject.message;
      try{
      var codeStatus = message.match('\\d{3}');
      if (codeStatus && codeStatus.length > 0)
        return parseInt(codeStatus[0].trim());
      else
        return HttpStatus.INTERNAL_SERVER_ERROR;
      }
      catch(error) {
        return HttpStatus.INTERNAL_SERVER_ERROR;
      }

  }
  static createAccount(cov_user) {
    let url = API_URL + WS_CREATE_ACCOUNT
    let cov_user_string = JSON.stringify(cov_user)
    let cov_user_json = JSON.parse(cov_user_string);
    return axios.post(url, cov_user_json)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error)
      throw(error)
    });
  }

  static updateAccount(cov_user, token) {
    let url = API_URL + WS_UPDATE_ACCOUNT
    let cov_user_string = JSON.stringify(cov_user)
    let cov_user_json = JSON.parse(cov_user_string)
    let headers = {
      Authorization: 'Bearer ' + token
    }
    return axios.post(url, cov_user_json, {headers})
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error)
      throw(error)
    });
  }

  static uploadPicture(user_email, file, token){
    let url = API_URL + WS_UPLOAD_PICTURE;
    
    const formData = new FormData();
    formData.append('cov_email', user_email);
    formData.append('cov_picture', file);

    let headers = {
      Authorization: 'Bearer ' + token
    }

    return axios.post(url, formData, {headers})
      .then(res => {
        console.log(res.data);
        return res;
      })
      .catch(error => {
        console.log(error)
        throw(error)
      });
  }

  static validateAccount(token) {
    let url = API_URL + WS_VALIDATE_ACCOUNT + '?token=' + token;
    return axios.get(url)
    .then((res) => {
      return res;
    })
    .then((valid) => {
        if(valid.data.accountStatus === "VALID") 
          return HttpStatus.OK;
        return HttpStatus.NOT_MODIFIED;
      })
    .catch(error => {
      console.log(error)
      throw(error)
    });
  }
  
  static async checkMail(email) {
      let url = API_URL + WS_CHECK_EMAIL + '?cov_email=' + email
      try {
          const res = await axios.get(url);
          return res;
      } catch (error) {
          console.log(error);
          throw (error);
      }
  }

  static connect(cov_user) {
    let url = API_URL + WS_CONNECT
    let cov_user_string = JSON.stringify(cov_user)
    let cov_user_json = JSON.parse(cov_user_string);
    return axios.post(url, cov_user_json)
    .then((res) => {
      return res;
    })
    .catch(error => {
      throw(error)
    });
  }

  static readAccount(email, token) {
    let url = API_URL + WS_READ_ACCOUNT + '?email=' + email
    let headers = {
      Authorization: 'Bearer ' + token
    }
    return axios.get(url, { headers: headers } )
    .then((res) => {
      return res;
    })
    .then((valid) => {
          return { 'status': HttpStatus.OK, 'data' : valid.data };
      })
    .catch(error => {
      console.log(error)
      throw(error)
    });
  }

  static updatePassword(cov_user, token) {
    let url = API_URL + WS_CHANGE_PASSWORD
    let cov_user_string = JSON.stringify(cov_user)
    let cov_user_json = JSON.parse(cov_user_string);
    let headers = {
      Authorization: 'Bearer ' + token
    }
    return axios.post(url, cov_user_json, {headers})
    .then((res) => {
      return res;
    })
    .catch(error => {
      console.log(error)
      throw(error)
    });
  }

  static forgotPassword(cov_mail) {
    let url = API_URL + WS_FORGOT_PASSWORD
    return axios.post(url, cov_mail)
    .then((res) => {
      return res;
    })
    .catch(error => {
      console.log(error)
      throw(error)
    });
  }

  
  static initPassword(cov_data) {
    let url = API_URL + WS_INIT_PASSWORD
    let cov_user_string = JSON.stringify(cov_data)
    let cov_user_json = JSON.parse(cov_user_string);
    return axios.post(url, cov_user_json)
    .then((res) => {
      return res;
    })
    .catch(error => {
      console.log(error)
      throw(error)
    });
  }

}
export default UserApi;