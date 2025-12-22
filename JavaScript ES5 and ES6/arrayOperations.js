// let num1=[]; //literal style array object is created
// let num2= new Array(); //created new memory using new keyword or constructor.
// let num3=[10,20,30,40,50,60,"Raj",true];//mixed data type array
// console.log("size of array num1" + num1.length);
// console.log("size of array num2" + num2.length);
// console.log("size of array num3" + num3.length);
// console.log(num3); //display all elements in string format
// console.log("Get value using index position:" + num3[3]);
// num3.push(100); // adds element at the end of array
// num3.push(200);
// num3.unshift(300); //adds element at the beginning of array
// num3.unshift(400);
// console.log(num3);
// console.log("size of array num3 after adding elements: " + num3.length);
// num3.pop(); //removes element from the end of array
// num3.shift(); //removes element from the beginning of array
// console.log("size of array num3 after removing elements: " + num3.length);
// console.log(num3);


//splice methode helps to add or remove elements from specific index position
let num4=[100,200,300,400,500,600];
console.log("Array before removing element: " + num4);
//remove element from index position 2
num4.splice(2,1); //first parameter is index position to remove element, second parameter is number of elements to remove
num4.splice(2,2);
console.log("Array after removing element: " + num4);

//adding elements using splice method
num4.splice(2,0,700); //first parameter is index position to add element, second parameter is number of elements to remove, third parameter is element to add
num4.splice(3,0,800,900); //adding multiple elements
console.log("Array after adding element: " + num4);
num4.splice(2,2,111,222); //removing and adding elements together
console.log("Array after removing and adding elements together: " + num4);
// 