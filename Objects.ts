import { IEmployee, IPermanentEmployee } from "./employee";

//object
var emp1 :{id:number,name:string,gender:string} = {id : 1,name:"amit",gender:"male"}; 
console.log(emp1);

var emp2 : {id? : number, name:string,gender:string} = {name:"amit",gender:"male"};
console.log(emp2);


type Employee = {id?:number,name:string,gender:string};

var emp3 : Employee = {id : 10, name:"amit",gender:"male"};
console.log(emp3);
var emp4 : Employee = {name:"priti",gender:"female"};
console.log(emp4);

//union '|'
type permanantEmployee = {yearlyPackage : number}
var emp5 : Employee | permanantEmployee = {id : 10,name:"neha",gender:"female",yearlyPackage:10};
console.log(emp5);
var emp6 : Employee | permanantEmployee = {id : 10,name:"pratik",gender:"male"};
console.log(emp6);

//intersection '&' //all properties are neccessory when usin & operator
var emp7 : Employee & permanantEmployee = {id : 10,name:"neha",gender:"female",yearlyPackage:10};
console.log(emp7);
// var emp8 : Employee & permanantEmployee = {id : 10,name:"pratik",gender:"male"};    //compile time error
var emp8 : Employee & permanantEmployee = {id : 10,name:"pratik",gender:"male",yearlyPackage:8};    //compile time error
console.log(emp8);

var emp9:IEmployee={
    id:12,
    name:"sakshi",
    gender:"female"
}
console.log(emp9);

var emp10:IPermanentEmployee={
    id : 21,
    name : "pranit",
    gender:"male",
    yearlyPackage:10
}
console.log(emp10);