let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num) // output as string with comma separated by,
console.log(num.join(" ")); // output as string with custom or space separator
console.log("retrieve elements one by one using for loop");
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

console.log("retrieve elements one by one using for..in loop - get index position");
for(let index in num){
    console.log("value is " + num[index]);
}

console.log("retrieve elements one by one using for.. of loop - get value directly");
for(let index of num){
    console.log("value is " + index);
}