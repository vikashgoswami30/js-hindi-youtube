// // // // const promiseOne = new Promise(function(resolve, reject){
// // // //    setTimeout(function(){
// // // //     console.log("Async task is compelete");
// // // //     resolve()
// // // //    },1000)
// // // // })

// // // // promiseOne.then(function(){
// // // //     console.log("Promise compelete");
    
// // // // })

// // // // new Promise(function(resolve,reject){
// // // //     setTimeout(function(){
// // // //         console.log("Async 2 is compelete");
// // // //         resolve()
// // // //     },1000)
// // // // }).then(function(){
// // // //     console.log("Promise 2 is also complete");
    
// // // // })
// // // // const promiseThree = new Promise(function(resolve, reject){
// // // //    setTimeout(function(){
// // // //     console.log("Async task is compelete");
// // // //     resolve({username:"Viaksh", email:"Vikash@gmail.com"})
// // // //    },1000)
// // // // })

// // // // promiseThree.then(function(user){
// // // //  console.log(user);
 
// // // // })

// // // const promisOne=  new Promise((resolve,reject)=>{
// // //     let sucess = true
// // //     sucess?reject("Error occur while executing the code"):resolve("All good")
// // //     // sucess?resolve("done"):reject("error")
// // // })

// // // promisOne.then(msg=>{
// // //     console.log(msg);
// // // }).catch(err=>{
// // //     console.log(err);
    
// // // })

setInterval(()=> console.log("This is vikash goswami"),2000)