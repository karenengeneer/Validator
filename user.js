const Validator =  require('./Validator.js');
class UsernameValidator extends Validator{
 isUserName(user){
   if(!user || !super.isString(user))
     return false;
   let userReg = /^[\w+_-]{4,24}$/;
   if(usernReg.test(user))
     return true;
   return false;
 }
}
module.exports = user.js;
