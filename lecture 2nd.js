//JavaScript Operators and Conditonal Statements

//Exponantiation operator (use to add power)
const a = 2;
const b = 4;

console.log(a**b);

//Strict comparison operator (use to compare with datatype)
const c = 2;
const d = "5";

console.log(c===d)
console.log(c!==d)

//used ternary operator Example 1
let age = 16;
let result = age >= 18 ? console.log("You can vote") : console.log("You cannot vote");

//Example 2
let num = prompt("Enter number:")
let Answer = num%2 === 0 ? console.log("Even") : console.log("Odd");
