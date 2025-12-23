let num1=[1,2,3,4,5,6,7,8,9,10];
console.log(num1);

num1.forEach(display)

function display(n){
    console.log(n);
}

console.log("----------------");

num1.forEach(function(n){
    console.log(n);
});

//for each no return
console.log("----------------");
num1.forEach((n)=>console.log(n));

console.log("---------map-------"); 
//map is callback takes each element and return same or modified element
//return type is array

let modifiedArray = num1.map(n=> n+10);
console.log(modifiedArray);

//filter is callback it return only those value if condition true
console.log("---------filter-------");
let evenNumbers = num1.filter(n=>n%2==0);
console.log(evenNumbers);

let oddNumbers = num1.filter(n=>n%2!=0);
console.log(oddNumbers);

console.log("---------reduce-------");
//reduce is callback it return single value after applying operation on all elements
let sum = num1.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
console.log("Sum of all elements: " + sum);

//array with method or function chain
//display only those element which is greater than 5
num1.filter(n=>n>5).forEach(n=>console.log(n));

//sum of all even numbers
let sumOfEvenNumbers = num1.filter(n=>n%2==0).reduce((accumulator,currentValue)=> accumulator + currentValue,0);
console.log("Sum of even numbers: " + sumOfEvenNumbers);