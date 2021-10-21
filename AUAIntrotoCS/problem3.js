const prompt = require('prompt-sync')();
const X1 = prompt ('X1=');
const X2 = prompt ('X2=');
const Y1 = prompt ('Y1=');
const Y2 = prompt ('Y2=');
const d = Math.sqrt (((X2 - X1) ** 2) + ((Y2 - Y1) ** 2))
console.log ("Length=" + d);