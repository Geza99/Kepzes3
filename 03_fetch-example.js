
const  fetch = require('node-fetch'); 

fetch('http://api.github.com/users/LaszloBarabas')
    .then( response => response.json()) 
    .then( result => console.log( result)) 
    .catch( error => console.error( error))



