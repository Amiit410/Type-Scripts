//TypeScript automatically infer type by given value

var val = 10;       // type : number
console.log(`type of val : ${typeof val}, value ${val}`);

var str = "Amit";       // type : string
console.log(`type of str : ${typeof str}, value ${str}`);


//union type
//-	Defining a variable value type using more than one datatype
//-	Using pipe operator |

var union : string | number | boolean;

union = "Amit";
console.log(`type of union : ${typeof union}, value ${union}`);

union = 10;
console.log(`type of union : ${typeof union}, value ${union}`);

union = true;
console.log(`type of union : ${typeof union}, value ${union}`);


//type alias
// -	We can give a different name to type 
// -	We can create our own custom type using type alias

type int = number;

var n1 : int = 101;
console.log(`type of n1 : ${typeof n1}, value ${n1}`);

// we can use type alias for union type

type IntStrBool = int | string | boolean;

var ISB : IntStrBool;
ISB = "Amit";
console.log(`type of ISB : ${typeof ISB}, value ${ISB}`);
ISB = 21;
console.log(`type of ISB : ${typeof ISB}, value ${ISB}`);
ISB = false;
console.log(`type of ISB : ${typeof ISB}, value ${ISB}`);

