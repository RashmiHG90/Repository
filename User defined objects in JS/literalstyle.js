// value can be anything - number, string boolean array
let emp1 = {id:100, name:"John", age:21, isActive:true, tech:["Java","Solidity"], address:{city:"Bangalore",state: "Karnataka"}}
console.log("id is " + emp1.id)
console.log("name is " + emp1.name)
console.log("age is " + emp1.age)
console.log("isActive is " + emp1.isActive)
console.log("tech is " + emp1.tech)

emp1.tech.forEach(tech => console.log(tech));

console.log("city is "+ emp1.address.city)
console.log("state is "+ emp1.address.state)

//literal style is used mainly for property, it will be come complex for behavior, 
// methods or functions
