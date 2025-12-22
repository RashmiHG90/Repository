var a = 10;
a=20;

var a=30;
document.write("a" +a);

let b=10;
b=20;
//let b=30;

for (var i=0;i<10000;i++){

}

document.write("i" + i)
console.log("i" + i);

for (let j=0; j<10000;j++){}
//this will throw error as j is block scoped
document.write("j" + j);
console.log("j" + j);

const c=10;
c=20;
//this will throw error as const value cannot be changed
document.write("c" + c);
//const c=30;