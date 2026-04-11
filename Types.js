"use strict";
// number
var n1 = 10;
console.log(`type of n1 : ${typeof n1} , value : ${n1}`);
// string
var s1 = "Amit";
console.log(`type of s1 : ${typeof s1} , value : ${s1}`);
// boolean
var b1 = true;
console.log(`type of b1 : ${typeof b1} , value : ${b1}`);
//bigint        //suffix 'n'
var bb1 = 383120919023890n;
console.log(`type of bb1 : ${typeof bb1} , value : ${bb1}`);
//null
var empty = null;
console.log(`type of empty : ${typeof empty} , value : ${empty}`); // type = object
//undefined
var und;
console.log(`type of und : ${typeof und} , value : ${und}`); // type = undefined
//void >    void we use as a function return type to not return anything from that function
//any
var val = 10;
console.log(`type of val : ${typeof val} , value : ${val}`);
val = "amit";
console.log(`type of val : ${typeof val} , value : ${val}`);
val = true;
console.log(`type of val : ${typeof val} , value : ${val}`);
//unknown
var newVal;
newVal = 10;
console.log(`type of newVal : ${typeof newVal} , value : ${newVal}`);
newVal = "amit";
console.log(`type of newVal : ${typeof newVal} , value : ${newVal}`);
//difference between any and unknown
//any disables typecheking
val = "Amit";
console.log(`val in upper case : ${val.toUpperCase()}`); //string function
val = 10;
// console.log(val.toUpperCase())      //no compile time error
//unknown : keeps typesafety, alternative to any
//check type before using functions
newVal = "Amit";
// console.log(`new val string in upper case : ${newVal.toUpperCase()}`)    // compile time error
if (typeof newVal === 'string') {
    console.log(`new val string in upper case : ${newVal.toUpperCase()}`);
}
newVal = 10;
if (typeof newVal === 'string') {
    console.log(`new val number in upper case : ${newVal.toUpperCase()}`);
}
//never : we use never as a return type when a function never returns anything
