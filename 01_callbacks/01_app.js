

var myFuncs = require('./function_collections.js')

// --- application  start ---
console.log(' Application Start')

myFuncs.asynchFunc_1(); 
myFuncs.asynchFunc_2(); 
myFuncs.asynchFunc_3(); 

myFuncs.asynchFunc_4(  function ( param ) {
    console.log(' Call back a 4-es assync fuggv. Udvozollek ' + param + '!'); 
}) ; 

console.log(' Application End')



