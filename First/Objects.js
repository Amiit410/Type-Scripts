//object
var emp1 = { id: 1, name: "amit", gender: "male" };
console.log(emp1);
var emp2 = { name: "amit", gender: "male" };
console.log(emp2);
var emp3 = { id: 10, name: "amit", gender: "male" };
console.log(emp3);
var emp4 = { name: "priti", gender: "female" };
console.log(emp4);
var emp5 = { id: 10, name: "neha", gender: "female", yearlyPackage: 10 };
console.log(emp5);
var emp6 = { id: 10, name: "pratik", gender: "male" };
console.log(emp6);
//intersection '&' //all properties are neccessory when usin & operator
var emp7 = { id: 10, name: "neha", gender: "female", yearlyPackage: 10 };
console.log(emp7);
// var emp8 : Employee & permanantEmployee = {id : 10,name:"pratik",gender:"male"};    //compile time error
var emp8 = { id: 10, name: "pratik", gender: "male", yearlyPackage: 8 }; //compile time error
console.log(emp8);
var emp9 = {
    id: 12,
    name: "sakshi",
    gender: "female"
};
console.log(emp9);
var emp10 = {
    id: 21,
    name: "pranit",
    gender: "male",
    yearlyPackage: 10
};
console.log(emp10);
export {};
