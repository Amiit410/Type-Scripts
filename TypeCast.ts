// type assertion : converting one type to another type

var s1 : string = "101";
console.log(`type of s1 : ${typeof s1} and the value : ${s1}`)

//converting string to number
//method1 : using '+' operator
var n1 : number = +s1;      
console.log(`type of n1 : ${typeof n1} and the value : ${n1}`)
//method 2 : using Number function
n1 = Number(s1);
console.log(`type of n1 : ${typeof n1} and the value : ${n1}`)

//converting string to boolean
//using Boolean function

s1 = "true";
var b1 : boolean = Boolean(s1);
console.log(`type of b1 : ${typeof b1} and the value : ${b1}`)      //true

s1 = "false";
b1 = Boolean(s1);
console.log(`type of b1 : ${typeof b1} and the value : ${b1}`)      //true      //wrong output

// instead do
s1 = "true";
b1 = (s1 === 'true');
console.log(`type of b1 : ${typeof b1} and the value : ${b1}`)  

s1 = "false";
b1 = (s1 === 'true');
console.log(`type of b1 : ${typeof b1} and the value : ${b1}`)  


//converting string to bigint
s1 = "63847387287429748";
var bigN : bigint = BigInt(s1);
console.log(`type of bigN : ${typeof bigN} and the value : ${bigN}`)  

//converting number to string

n1 = 10;
s1 = String(n1);
console.log(`type of s1 : ${typeof s1} and the value : ${s1}`)  