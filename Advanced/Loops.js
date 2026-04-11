"use strict";
//// while loop
// var start : number = 1;
// while(start<=5){
//     console.log(start);
//     start++;
// }
// // do-while loop
// var start: number = 9;
// do {
//     console.log(start);
//     start++;
// } while (start <= 5)
// //for loop
// for (var i = 1; i <= 5; i++) {
//     console.log(i);
// }
// for in loop
var arr = [10, 20, 30, 40, 50];
for (var i in arr) {
    console.log(i); //prints index number
}
for (var j of arr) {
    console.log(j); //prints value
}
