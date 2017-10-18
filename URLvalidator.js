class URLValidator extends Validator{
   isValURL(url){
   if(!url)
   return false;
   let urlReg = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
   if(urlReg.test(url))
     return true;
     return false;
 }
 }
 module.exports = URLvalidator.js;
