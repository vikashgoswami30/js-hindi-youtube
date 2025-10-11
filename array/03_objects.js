// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Vikash Goswami"
// tinderUser.isLoggedIn = false

// // // console.log(tinderUser);

// // const regularUser ={
// //     email: "some@gmail.com",
// //     fullname:{
// //         userfullname:{
// //             firstname: "vikash",
// //             lastname: "Goswami"
// //         },
// //         userfathername:{
// //             firstname:"Rohtash",
// //             lastname:"Goswami"
// //         }
// //     }
// // }
// // console.log(regularUser.fullname);

// // combineing the objects 

// // const obj1 = {1: "a" , 2: "b"}
// // const obj2 = {3: "a" , 4: "d"}

// // // const obj3 = {obj1,obj2}
// // // const obj3 = Object.assign({},obj1,obj2)
// // const obj3 = {...obj1 ,...obj2} 
// // console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggedOut'));

// objects destructuring 
const course ={
    courseName: "Js in hindi",
    courseFee: "999",
    courseTeacherName: "Vikash"
}


const {courseTeacherName : Teacher} = course
console.log(Teacher);
