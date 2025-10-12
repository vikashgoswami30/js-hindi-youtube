// // // // const user= {
// // // //     username:"Vikash",
// // // //     price:900,
// // // //     welcomeMessage: function(){
// // // //         console.log(`${this.username}, Welcome to website`);
// // // //         console.log(this); // this print user entire object
        
// // // //     }

// // // // }
// // // // user.welcomeMessage()
// // // // console.log(this); // it print empty object

// // // // // user.username="sameer"
// // // // // user.welcomeMessage()

// // // function chai(){
// // //     let username = "Vikash"
// // //     console.log(this.username);
// // // }
// // // chai()

// // const chai = () =>{
// //    let usrename = "Vikash goswami"
// //    console.log(this);
// // }
// // chai()

// // const paani = function(){
// //     let username = "goswami viaksh"
// //     console.log(this);
    
// // }
// // paani()

// console.log(addTwo(3,4));

// const addThree= (num1,num2,num3) => num1+num2+num3 // implecit return

// console.log(addThree(3,4,5));

// // return keyword complusory when using curlybraces {}
// // no need to return curly braces if usses braces ()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
const add = (num1,num2)=> ({username: "vikash"})

console.log(add());

