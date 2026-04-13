"use strict";
class Employee {
    Id = 0; // it is mandatory to initialise property in typescript class 
    Name = "";
    Email; // we can use definite assertion '!' operator or make property optional by using '?' operator
    constructor(id, name, email) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
    }
    Details() {
        console.log(`Empployee : id = ${this.Id}, Name = ${this.Name}, Email = ${this.Email}`);
    }
}
// var emp1 = new Employee();      //object of a class
// emp1.Id = 10;
// emp1.Name = "Amit";
// emp1.Email = "amit@gmail.com";
// emp1.Details();
// var emp2 : Employee = new Employee();
// emp2.Id = 20;
// emp2.Name = "Priti";
// emp2.Email = "priti@gmail.com";
// emp2.Details();
var emp3 = new Employee(101, "Amit", "amit@gmail.com");
emp3.Details();
