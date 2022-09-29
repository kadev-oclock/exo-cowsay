

const userInfo = require('./information');

var  cowsay = require("cowsay");


console.log(cowsay.say({
    text : `hello je suis  ${userInfo.name} du  ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));