//JavaScript arrays
let marks = [1,2,3,4,5];
let myName = ["Rahul","Nikhil","Mohit"];
console.log(marks[4] + "\n" + myName[0]);
console.log(marks);

//Array methods

//Push() (use to add element at end)
let fruits = ["apple","banana","mango"];
fruits.push("kiwi");
console.log(fruits);

//Pop() (use to delete from end & return)
fruits.pop();

console.log(fruits);

console.log(fruits.toString());

//concat() (use to join multiple array and return result in original arrya)
let vegetables = ["potato","tomato"];
let combine = fruits.concat(vegetables);
console.log(combine);

//unshift() (use to add element in start and result in original array)
fruits.unshift("cherry");
console.log(fruits);

//shift() (use to delete element at start and result in original array)
fruits.shift();
console.log(fruits);

//Slice() (use to return a piece of array and return new array)
let num = [1,2,3,4,5,6]
let cutNum = num.slice(0,2);
console.log(cutNum);

//Splice() (change in original array use to add,remove,replace)
num.splice(1,2,6,8);  //(pass three element)
console.log(num);