import {getToken} from './token';
export default () => {
   if(getToken()){
      return true
   }else{
      return false
   }
}
