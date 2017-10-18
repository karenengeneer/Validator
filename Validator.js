class Validator {
 isString(str) {
   if(!str || typeof(str) !== "string")
     return false;
     return true;
 }
 isNumber(num){
   if(!num){
    return false;
   }
   let numReg = /(^[+-]?\d+[.]?)g/;
   if(numReg.test(num))
   return true;
   return false;
 }
 isInteger(num) {
   if(!num || (num ^ 0) !== num)
   return false;
   return true;
 }
 isFloat(num){
   if(!num || (num ^ 0) === num)
   return false;
   return true;
 }
 isSpecialSymbol(sym){
   if(!sym)
   return false;
   let symReg = /([^a-zA-Z\d])g/;
   if(symReg.test(sym))
   return true;
   return false;
 }
 isDate(d){
   if(!d)
   return false;  
   if(Date.parse(d))
   return true;
   return false;
 }
}
module.exports = Validator;
