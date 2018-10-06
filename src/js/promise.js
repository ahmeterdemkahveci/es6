let promise = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        reject();
        
    },2000)
});

promise.then(()=>{
    console.log('Finished')
}).then(()=>{
    console.log('Finished 2')
}).catch(()=>{
    console.log('Rejected')
})
