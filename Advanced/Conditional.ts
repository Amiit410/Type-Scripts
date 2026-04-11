var a: number = 20;

// if(a === 10){
//     console.log("Ten");
// }

// if(a === 10){
//     console.log("Ten");
// }else{
//     console.log("Not Ten");
// }

// var result = (a==10) ? "Ten" : "Not Ten";
// console.log(result);

// if(a===10){
//     console.log("Ten");
// }else if(a===20){
//     console.log("Twenty");
// }else if(a===30){
//     console.log("Thirty");
// }else{
//     console.log("Not 10,20,30");
// }

switch (a) {
    case 10:
        console.log("Ten");
        break;
    case 20:
        console.log("Twenty");
        break;
    case 30:
        console.log("Thirty");
        break;
    default:
        console.log("Not 10,20,30");
        break;
}