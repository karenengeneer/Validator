 const Validator =  require('./Validator.js')
 class EmailValidator extends Validator{
    isValEmail(email){
    if(!email)
    throw new Error("Please enter your email address");
    let addReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(isValEmail.test(email))
    return true;
    throw new Error("Incorrect email address");
  }
}
module.exports = EmailValidator;
