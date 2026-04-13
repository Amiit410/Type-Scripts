"use strict";
class Employee {
    _name;
    get name() {
        return this._name;
    }
    set name(para) {
        this._name = para;
    }
}
var emp = new Employee();
emp.name = "amit";
console.log(emp.name);
