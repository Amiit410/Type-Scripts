// //normal function
// function printA(){
//     console.log("printA() called");
// }

// printA();



// //function expression
// var printB = function(){
//     console.log("printB() called");
// }

// printB();

// // arrow function
// var printC = ()=>{
//     console.log("printc() called");
// }

// printC();

// //parameterised function
// function Add(a : number,b : number) : number{
//     return a+b;
// }

// console.log(Add(10,20));

////default parameter

// function Add(a:number,b:number = 10) : number{
//     return a+b;
// }

// console.log(Add(10,20));
// console.log(Add(10));

// //optional paramerter

// function Add(a: number, b?: number): number {
//     if (typeof a === "number" && typeof b === "number") {
//         return a+b;
//     }else{
//         return a;
//     }
// }

// console.log(Add(10, 20));
// console.log(Add(10));

// //rest parameter
// function Add(...arr : number[]) : number{
//     var sum : number = 0;
//     for(var i of arr){
//         sum = sum+i;
//     }
//     return sum;
// }

// console.log(Add(10))
// console.log(Add(10, 20))
// console.log(Add(10, 20, 30))

//function overloading 

function Add(a: number, b: number): number;
function Add(a: string, b: string): string;

function Add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a +'\t'+ b;
    }
}

console.log(Add(10,20));
console.log(Add("amit","linge"));