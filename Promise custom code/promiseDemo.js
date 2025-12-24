let obj = new Promise((resolved, rejected)=>{
    //resolved("Promise resolved successfully");
    rejected("Promise rejected with error");
})

obj.then(result=> console.log("Promise resolved successfully, then block"+result))
.catch((error)=>console.log("Error, catch block: "+error))
.finally(()=>console.log("Finally block executed"));

console.log("normal statement 1");
console.log("normal statement 2");