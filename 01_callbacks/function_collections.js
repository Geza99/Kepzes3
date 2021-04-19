



function asynchFunc_1 () { 
    setTimeout(  () => { 
        console.log('my-asynch-func-1 executed')
    }, 3000)
}

function asynchFunc_2 () { 
    setTimeout(  () => { 
        console.log('my-asynch-funcì-2 executed')
    }, 1000)
}

function asynchFunc_3 () { 
    setTimeout(  () => { 
        console.log('my-asynch-func-3 executed')
    }, 2000)
}


function asynchFunc_4 (callback) { 
    setTimeout(  () => { 
        console.log('my-asynch-func-4 executed')
        callback('Kolozsvarrol '); 
    }, 2000)
}

module.exports = { 
    asynchFunc_1:   asynchFunc_1, 
    asynchFunc_2:   asynchFunc_2, 
    asynchFunc_3:   asynchFunc_3, 
    asynchFunc_4:   asynchFunc_4
}

