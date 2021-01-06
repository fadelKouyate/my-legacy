import cogoToast from 'cogo-toast';
import { MESSAGE_POSITION, HIDE_AFTER_DEFAULT, HIDE_AFTER_LOADING } from '../../../config/Message';


class Message {

 static options = { 
                  position: MESSAGE_POSITION,
                  hideAfter: HIDE_AFTER_DEFAULT
              }
 static info (message, time) {
    return cogoToast.info(message, Object.assign(Message.options, { hideAfter:time }) )
  }

  static error (message, time) {
    return cogoToast.error(message, Object.assign(Message.options, { hideAfter:time }) )
  }

  static success (message, time) {
    return cogoToast.success(message, Object.assign(Message.options, { hideAfter:time }) )
 }

  static loading (message, time) {
    let loadingtime = time || HIDE_AFTER_LOADING
    return cogoToast.loading(message, Object.assign(Message.options, { hideAfter:loadingtime }) )
  }

  static warn (message, time) {
    return cogoToast.warn(message, Object.assign(Message.options, { hideAfter:time }) )
  }

}

export default Message
