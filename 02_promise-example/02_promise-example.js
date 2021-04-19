


function myFirstPromise( param,  ) { 
    return new Promise( ( resolve, reject) =>  {
        if (param.szam1 === param.szam2) { 
            resolve(szam1,szam2); 
        }
        else {
            reject(param1,param2)
        }
    } )
}



myFirstPromise({ szam1: 3, szam2: 4 } )
    .then( ( param ) => { console.log('Egyenloek:  ' + param.szam1+','+param.szam2 ) } )
    .catch((param) => { console.log('Nem egyenloek:  ' + param.szam1 + ',' + param.szam2)  } )




















































