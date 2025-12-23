let msg1 = 'Welcome to JavaScript';
console.log(msg1);
let msg2 = "JavaScript ES6 features";
console.log(msg2);

let msg3 = new String("String Object created using new keyword");
console.log(msg3);
console.log("length of msg1: " + msg1.length);
console.log("length of msg2: " + msg2.length);
console.log("length of msg3: " + msg3.length);

let msg4 = "Welcome"
  + " to "
  + "JavaScript "
  + "ES6 "
  + "features";
console.log(msg4);

//ES6 supports big para in single backtick ` `, no need to concatenate using + operator
let msg5 = `Welcome to

JavaScript
ES6

features`;
console.log(msg5);

console.log(msg5.toLocaleUpperCase());
console.log(msg4.substring(11,21)); //start index, end index