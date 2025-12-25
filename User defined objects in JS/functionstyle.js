//this keyword is use to refer to current object
// function Employee(){
//     this.id = 100;
//     this.name = "John";
//     this.salary = 21000; // employee property consider
    
//     let designation="tester"; //local property

//     //behaviour
//     this.displayEmployee = function(){
//         console.log("id is " + this.id)
//         console.log("name is " + this.name)
//         console.log("salary is " + this.salary)
//         console.log("designation is " + designation)
//         fun();
//     }

//     //this will not work, if u want to make function work with employee object then u have to use this
//      let fun = function(){
//         console.log("testing function display")
//      }

// }

// //Employee() - consider as calling normal function
// let emp1 = new Employee(); // we created employee object, it created heap memory

// console.log("id is " + emp1.id)
// console.log("name is " + emp1.name)
// console.log("salary is " + emp1.salary)
// console.log("designation is " + emp1.designation)//will be undefined

// emp1.displayEmployee();
// emp1.fun();// throws error..

//parametric function

function Employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.displayEmployeeInfo = function(){
        console.log("id is " + this.id)
        console.log("name is " + this.name)
        console.log("salary is " + this.salary)
    }
    this.incrementSalary = function(newSalary){
       this.salary = newSalary
    }
}

let emp1 = new Employee(100, "John", 35000);
let emp2 = new Employee(200, "akhil", 40000);
emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo()
emp1.incrementSalary(45000)
emp2.incrementSalary(emp2.salary+3000);

// after increment
emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo();