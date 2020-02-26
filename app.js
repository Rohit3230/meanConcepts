var express    = require('express');        // call express
var app        = express();                 // define our app using express
var process = require('process');

console.log('*******11');
setImmediate(function(){console.log('*******11-1')});
console.log('*******12');
setImmediate(function(){console.log('*******12-1')},0);
console.log('*******13');
setImmediate(function(){console.log('*******13-1')});
console.log('*******14');
setImmediate(function(){ console.log('*******14-1')},0);
console.log('*******15');

console.log('*******1');
setImmediate(() => console.log('*******1-1'));
console.log('*******2');
setImmediate(() => console.log('*******2-1'),0);
console.log('*******3');
setImmediate(() => console.log('*******3-1'));
console.log('*******4');
setImmediate(() => console.log('*******4-1'),0);
console.log('*******5');

console.log('*******16');
setTimeout(function(){console.log('*******16-1')});
console.log('*******17');
setTimeout(function(){console.log('*******17-1')},0);
console.log('*******18');
setTimeout(function(){console.log('*******18-1')});
console.log('*******19');
setTimeout(function(){ console.log('*******19-1')},0);
console.log('*******20');

console.log('*******6');
setTimeout(() => console.log('*******6-1'));
console.log('*******7');
setTimeout(() => console.log('*******7-1'),0);
console.log('*******8');
setTimeout(() => console.log('*******8-1'));
console.log('*******9');
setTimeout(() => console.log('*******9-1'),0);
console.log('*******10');


console.log('*******26');
process.nextTick(() => console.log('*******26-1'));
console.log('*******27');
process.nextTick(() => console.log('*******27-1'),0);
console.log('*******28');
process.nextTick(() => console.log('*******28-1'));
console.log('*******29');
process.nextTick(() => console.log('*******29-1'),0);
console.log('*******30');

console.log('*******21');
process.nextTick(function(){console.log('*******21-1')});
console.log('*******22');
process.nextTick(function(){console.log('*******22-1')},0);
console.log('*******23');
process.nextTick(function(){console.log('*******23-1')});
console.log('*******24');
process.nextTick(function(){ console.log('*******24-1')},0);
console.log('*******25');











setImmediate(()=>{

    console.log('MEANs:  No matters you are using arrow functions or normal (classical) functions. ')
    console.log('Execution Secuence:-')
    console.log('First :- Process.nextTicke()');
    console.log('Second :- setTimeout()');
    console.log('Third :- setImmediate()');

});





// console.log('process**********');
// setImmediate(() => console.log('resp****'));
// console.log('init****0');
// setImmediate(() => console.log('resp****1'), 0);
// console.log('init****2');
// setImmediate(() => console.log('resp****3'));
// console.log('init****4');
// setTimeout(() => console.log('resp****5'), 0);
// console.log('init****6');
// setTimeout(() => console.log('resp****7'));
// console.log('init****8');

// console.log('init****9');
// setImmediate(function(){console.log('resp****10')}, 0);
// console.log('init****11');
// setImmediate(function(){console.log('resp****12')});
// console.log('init****13');
// setTimeout(function(){console.log('resp****14')}, 0);
// console.log('init****15');
// setTimeout(function(){console.log('resp****16')});
// console.log('init****17');

// process.nextTick(function(){console.log('Process NextTick*****3'),0});

// process.nextTick(function(){console.log('Process NextTick*****2')});

// process.nextTick(() => console.log('Process NextTick*****0'));

// process.nextTick(() => console.log('Process NextTick*****1'),0);

// console.log('init****18');
// console.log('init****19');

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












