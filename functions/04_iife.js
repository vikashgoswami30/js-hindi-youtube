// IIFE Immediately invoked function expressions
// this iife use to protect the code from global polluted code
(function chai(){
    console.log("Hello vikash goswami");
    
})();

( function aurcode(){
    console.log("Hi from arrow function");
    // this is named iife
})();

( (name)=>{
    console.log(`Hi , ${name}`);
    
})("VIKASH") //passing values in arrow function iife 
