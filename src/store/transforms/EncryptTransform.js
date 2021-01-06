import { createTransform } from 'redux-persist';
import CryptoJS from 'crypto-js';

const secretKey = 'ousmane@fadjimba'
const EncryptTranform = createTransform(
    (inboundState, key) => {
      if (!inboundState) return inboundState;
      const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(inboundState), secretKey);
  
      return cryptedText.toString(); 
    },
    (outboundState, key) => {
      if (!outboundState) return outboundState;
      const bytes = CryptoJS.AES.decrypt(outboundState, secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  
      return JSON.parse(decrypted);
    },
  );

  export default EncryptTranform



