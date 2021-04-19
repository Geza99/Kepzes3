
var fetch = require('node-fetch'); 

async function asyncFunc() {
  // fetch data from a url endpoint
  const response = await fetch('http://api.github.com/users/LaszloBarabas');  
  const data  = await response.json(); 
  console.log('***> ', data); 
  return data;
}



//asyncFunc(); 
asyncFunc().then( data => console.log(data)); 
