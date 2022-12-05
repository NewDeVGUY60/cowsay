const userInfo = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : userInfo.userName+ " " + userInfo.campus,
    e : "oO",
    T : "U "
}));
