"use strict";
//question 1:
function area_rectnagle(length, breadth) {
    console.log(length * breadth);
}
area_rectnagle(3, 4);
//question 2:
function volume_cube(length1, breadth1, height) {
    console.log(length1 * breadth1 * height);
}
volume_cube(3, 4, 5);
//question 3:
let number = 5;
if (number > 0) {
    console.log("the number is positive");
}
else if (number < 0) {
    console.log("the number is negative");
}
else {
    console.log("the number is zero");
}
//question 4:
let num = 16;
if (num % 2 == 0) {
    console.log("the number is even");
}
else if (num % 2 != 0) {
    console.log("the number is odd");
}
else {
    console.log("the number is neither even nor odd");
}
//question 5:
let age = 18;
if (age >= 18) {
    console.log("the person is elligible");
}
else if (age < 18) {
    console.log("the person is not elligible");
}
//question 6:
function mathematical_express() {
    console.log((10 + 5) * (3 - 2) / (4 % 3) - 7);
}
mathematical_express();
console.log(15 / (4 % 3) - 7);
