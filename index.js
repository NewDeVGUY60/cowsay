const userInfo = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "je m'appelle " + userInfo.name + ", je suis au campus de la " + userInfo.campus,
    e : "oO",
    T : "U "
}));
