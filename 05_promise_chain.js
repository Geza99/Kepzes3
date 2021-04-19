// Creates a promise that's resolved immediately, and 
// is stored in "promise1". 
/*
var promise1 = new Promise(( resolve, reject) => { 
    resolve(' fulfilled'); 
}); 
// Use the "then()" method of "promise1" to create a 
// new promise instance, which is stored in "promise2". 
var promise2 = promise1.then(( value) => { 
    console.log(' then 1', value); 
    // → then 1 fulfilled 
}); 

// Create a "then()" callback for "promise2". This actually 
// creates a third promise instance, but we don't do anything 
// with it. 
promise2.then(( value) => { 
    console.log(' then 2', value); 
    // → then 2 undefined 
});
*/
console.log(' equal', promise1 === promise2);


console.log('ex 2.-------------'); 

new Promise(( resolve, reject) => {
    Math.round( Math.random()) ? 
        resolve(' fulfilled') : reject(' rejected'); 
}).then(( value) => { 
    // Called when the original promise is resolved,
    // returns the value in case there's another 
    // promise chained to this one. 
    console.log(' ex. 2 then 1', value); 
    return value; 
}).catch(( reason) => { 
    // Chained to the second promise, called 
    // when it's rejected. 
    console.error(' ex. 2 catch 1', reason); 
}).then(( value) => {
    // Chained to the third promise, gets the 
    //  value as expected, and returns it for any 
    //  downstream promise callbacks to consume. 
    console.log(' ex. 2 then 2', value); 
    return value; 
}).catch(( reason) => { 
    // This is never called - rejections do not 
    // proliferate through promise chains. 
    console.error(' ex. 2 catch 2', reason) 
});


