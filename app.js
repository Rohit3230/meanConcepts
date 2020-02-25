var express    = require('express');        // call express
var app        = express();                 // define our app using express
var process = require('process');














console.log('process**********');
setImmediate(() => console.log('resp****'));
console.log('init****0');
setImmediate(() => console.log('resp****1'), 0);
console.log('init****2');
setImmediate(() => console.log('resp****3'));
console.log('init****4');
setTimeout(() => console.log('resp****5'), 0);
console.log('init****6');
setTimeout(() => console.log('resp****7'));
console.log('init****8');

console.log('init****9');
setImmediate(function(){console.log('resp****10')}, 0);
console.log('init****11');
setImmediate(function(){console.log('resp****12')});
console.log('init****13');
setTimeout(function(){console.log('resp****14')}, 0);
console.log('init****15');
setTimeout(function(){console.log('resp****16')});
console.log('init****17');

process.nextTick(function(){console.log('Process NextTick*****3'),0});

process.nextTick(function(){console.log('Process NextTick*****2')});

process.nextTick(() => console.log('Process NextTick*****0'));

process.nextTick(() => console.log('Process NextTick*****1'),0);

console.log('init****18');
console.log('init****19');

// setTimeout(function() {
//     console.log("resp****4");
//     setImmediate(function() {
//         console.log("resp****5");
//     });
// }, 0);
// setTimeout(function() {
//     console.log("resp****6");
//     setImmediate(function() {
//         console.log("resp****7");
//     });
// }, 0);
// setTimeout(function() {
//     console.log("resp****8");
// }, 0);


module.exports = app;












