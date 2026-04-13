"use strict";
class Employee {
    // Name! : string;       //by default public
    // private Name! : string;  
    Name;
    constructor(name) {
        this.Name = name;
    }
    print() {
        console.log(`employee : ${this.Name}`);
    }
}
class Customer extends Employee {
    print() {
        console.log(`customer : ${this.Name}`);
    }
}
var emp = new Employee("amit");
// emp.Name;
emp.print();
var c1 = new Customer("priti");
c1.print();
