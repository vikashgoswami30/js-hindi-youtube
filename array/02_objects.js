const mySymbol = Symbol("Key")
const JsUser = {
   name:"Vikash",
   age:24,
   [mySymbol]: "MyKey",
   "full name":"Vikash Goswmai",
   location:"Ghaziabad", 
   mail:"vikash@gmail.com",
   isLoggedIn:false,
   lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.mail);
// console.log(JsUser["mail"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySymbol]);

JsUser.greeting = function(){
   console.log("Hello JS USer");
} 
JsUser.greetingTwo = function(){
   console.log(`Hello Js User, ${this.name}`);
} 

console.log(JsUser.greetingTwo());
console.log(JsUser.greeting);


