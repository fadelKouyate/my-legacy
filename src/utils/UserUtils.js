import { Config } from '../config/Register'

class UserUtils {
    
    static mappingData(data) {
      return {
        cov_mail : data.email,
        cov_first_name : data.fname,
        cov_last_name : data.lname,
        cov_birth : data.birth,
        cov_gender : data.gender,
        cov_phone : data.phone,
        cov_city : data.city,
        cov_picture : data.picture, 
        cov_description : data.description
      }
    }
        
   static checkValue(name, value, posError=-1) {
    let config = Config[name]
    let regex = new RegExp(config.regex)
    let resultat = regex.test(value)
    let message = resultat ? '': config.errorMessage
    let errorStep = resultat ? '' : posError
    return { resultat: resultat, message: message, errorStep: errorStep }     

  }

  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, 1000 * ms));
  }
  
}

export default UserUtils