//JavaScript Functions and Methods

//functions making and also calling function 
function myDetails(){
      console.log("Rahul Patel");
      console.log("age is 21");
      console.log("Birth date 17th Sept");
      console.log("Learns new skils");
} 
myDetails();
myDetails();

//Passing parameter throung function 
function myFunction(msg){ //the value under function definition is paramter
    console.log(msg);
}
myFunction("I love JS");   //the value under function call is argument

//Arrow function (way to write a function in compact way)
const sum =(a,b) =>{
    return a + b;
}
console.log(sum);

//Array methods use to perform some specific tasks 

//forEach loop in array (will only use for array)
//ex 1
let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val){
    console.log(val);
});

//ex 2  
let cities = ["pune","mumbai","nashik"];

cities.forEach((val, idx, cities) => {
    console.log(val.toUpperCase(), idx, cities);
});

//map method in array (use to create new array with result)
let numbers =[2,6,0,8,9,4,1];

let newArr = numbers.map((val) => {
    return val*val;
});
console.log(newArr);

//Filter method in array (use to filter the  values of array)
let evenNum = numbers.filter((val) =>{
    return val % 2 === 0;
});
console.log(evenNum);

//Reduce method in array (use to print single element after performing task on array)
let output = numbers.reduce((res, curr) =>{
      return res + curr;
});
console.log(output);