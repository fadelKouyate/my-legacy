import {AUTH_TOKEN_EXPIRATION_SECONDS} from '../config/Security'
import moment from 'moment'

class Security {
    
 static isAccess(action_date) {   
    let last_action_date = moment(parseInt(action_date,10))
    let date_now = moment (Date.now())
    let result = date_now.diff(last_action_date,'milliseconds')/1000
    return result<AUTH_TOKEN_EXPIRATION_SECONDS
 }

}

export default Security