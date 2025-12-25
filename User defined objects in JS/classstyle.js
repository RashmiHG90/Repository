class Employee{

    // constructor(){
    //     console.log("Object created")
    //     this.id = 100;
    //     this.name = "John"
    //     this.salary = 25000
    // }

      constructor(id,name,salary){
        console.log("Object created")
        this.id = id;
        this.name = name
        this.salary = salary
    }

displayEmployeeInfo(){
    console.log("employee class function")
    console.log("id is " + this.id)
    console.log("name is " + this.name)
    console.log("salary is " + this.salary)
}
}

//let emp1 = new Employee();
let emp2 = new Employee(100, "John", 35000);
//emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo();