"use strict";
class employee {
    name;
    // constructor(private name : string)
    // constructor(protected name : string)
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
var emp = new employee("Amit");
emp.print();
emp.name = "priti";
emp.print();
