//JavaScript Loops and Strings

for(let i=0; i<4; i++){
    console.log(i);
}

//for-of loop (use to iterate on string and arrays)
let str = "RahulPatel";
for(let i of str){
    console.log("i = "+i)
}

//for-in loop (use to iterate for objects)
let student = {
    id : "Rahul",
    age : 21,
    cgpa : 6.43
};
for(let i in student){
console.log(i,student[i]);
}

//Template leteral in string(``)
let output = `My name is ${student.id} and my age is ${student.age}`;
console.log(output);

//String Methods
let name1 = "rahul";
console.log(name1.toUpperCase());

let name2 = "RAHUL";
console.log(name2.toLowerCase());

let name3 = "  abc  "; //use to remove all spaces
console.log(name3.trim());

console.log(name1.slice(0,2)); //use to return parts

console.log(name1.concat(name2)); //use to join two strings

console.log(name1.replace("r","p")); //use to replace the value 

console.log(name1.charAt(2)); //use find the  charater at index

