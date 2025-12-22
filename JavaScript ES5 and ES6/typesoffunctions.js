// display1(); // we can call normal function before its declaration due to hoisting

// //Normal function ES5
// function display1(){
//     console.log("Normal function - display1 called");
// }
// display1();

// //display3();// this throws an error - Cannot access 'display3' before initialization

// //expression style function ES5
// let display3 = function(){
//     console.log("expression function - display 3 called");
// }
// display3();

// //Arrow function ES6
// let display4 = ()=>console.log("Arrow function - display4 called");
// //single line arrow function, does not need curly braces and return statement
// display4();

// let addNumbers = function(a,b){
//     var sum = a+b;
//     return sum;
// }
// console.log("Sum using normal function: " + addNumbers(10,20));

// letaddNumbersArrow = (a,b)=>{
//     let sum = a+b;
//     return sum;
// }
// //other way of writing letAddNumbersArrow = (a,b)=>a+b;
// console.log("Sum using arrow function: " + letaddNumbersArrow(10,20));

// let largestNumber = function(a,b){
//     if(a>b){
//         return "first number is largest number";
//     }else {
//         return "second number is largest number";
//     }
// }
// console.log(largestNumber(10,20));

// let largestNumberArrow = (a,b) =>{
//      if(a>b){
//         return "first number is largest number";
//     }else {
//         return "second number is largest number";
//     }
// }

// console.log(largestNumber(50,20));

//callback function example
function greetings(fname,callback){
    return "welcome " +callback(fname);
}

let maleInfo= function(fname){
    return "Mr. " + fname;
}

let femaleInfo = (fname)=>"Ms. " + fname;

let a =greetings("John",maleInfo);
console.log(a); 
console.log(greetings("Mary",femaleInfo));

//callback function example
function greetings(fname,abc){
    return "welcome " +abc(fname);
}

let ra =greetings("Raj ",function(fname){
    return "Mr. " + fname;
});
console.log(ra); 

console.log(greetings("reeta",  (fname)=>"Ms. " + fname));