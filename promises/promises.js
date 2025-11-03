const promiseOne = new Promise(function(resolve, reject){
   setTimeout(function(){
    console.log("Async task is compelete");
    resolve()
   },1000)
})

promiseOne.then(function(){
    console.log("Promise compelete");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 is compelete");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 is also complete");
    
})
const promiseThree = new Promise(function(resolve, reject){
   setTimeout(function(){
    console.log("Async task is compelete");
    resolve({username:"Viaksh", email:"Vikash@gmail.com"})
   },1000)
})

promiseThree.then(function(user){
 console.log(user);
 
})