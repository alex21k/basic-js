const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
console.log(date);
if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
    throw new TypeError;
  } 
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error()
  }

var x = date.getMonth();
var y = date.getDate();
if (x == 2 && y == 29){
return 'Unable to determine the time of year!'
}
console.log(x,y);
if (x==2||x==3||x==4) {
return "spring";
} if (x>=5 && x<=7) {
return "summer";
} if (x>=8 && x<=10) {
return "autumn";
} if (x==11||x==0||x==1) {
return "winter";
} else throw new Error;
}
