const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error', undefined)
        callback(undefined, [1,4,7])
    },2000)

}

doWorkCallback((error,result) => {
    if (error) {
        return console.log(error);
    }
    console.log(result);
})

// Error Prune
// uses single statements (if,else)
// we dont have stop where can call both at a time


