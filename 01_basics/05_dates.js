// let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate =  new Date("01-10-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // milisecond into seconds
let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);


newDate.toLocaleString('default', {
    weekday: "long",
    
})
