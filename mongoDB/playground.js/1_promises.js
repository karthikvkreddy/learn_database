const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Done');
        reject('rejected')
    },2000);
})

doWorkPromise.then((res) => {
    console.log('Sucess', res);
}).catch((error) => {
    console.log('Error', error);
});

// Easy to manage since
// uses seperate functions using (then, catych)
// easy to manage , because we can do either reject or resolve once

//                                    fullfilled  
//                                /
// Promise      -- pending -->
//                                \   
//                                    rejected