/**
 * Created by Mario on 15.7.2014 г..
 */
var time = new Date();
var currentTime = time.getHours()+ ':'+ time.getMinutes();

console.log(currentTime);

var readline=require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});