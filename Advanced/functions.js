"use strict";
// //normal function
// function printA(){
//     console.log("printA() called");
// }
function Add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + '\t' + b;
    }
}
console.log(Add(10, 20));
console.log(Add("amit", "linge"));
