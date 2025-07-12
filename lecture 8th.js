//JavaScript Class and Objects 

//Prototype
//It is a javascripy built in object which contains some properties and method
const employee = {
   calcTax() {
      console.log("Tax rate is 30%");
   },
};
const Rahul = {
    salary : 50000,
};
const Rohan = {
    salary : 20000,
    calcTac() {
        console.log("Tax rate is 10%");
    },
};
Rahul.__proto__ = employee;
Rohan.__proto__ = employee;

//Class (It is a blueprint of object)
class ToyotaCar {
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  setBrand(brand){
    this.brand = brand;
  }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("Lexus");


//Constructor
class Toyota {
    constructor(brand, mileage) {
        console.log("Creating new Object");
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
}

let fortuner1 = new ToyotaCar("fortuner", 10);
let lexus1 = new ToyotaCar("lexus", 20);

//Inheritance 
class Person {
    eat() {
        console.log("Eating");
    }
    sleep() {
        console.log("Sleeping");
    }
}
class Engineer extends Person{
    work() {
        console.log("Solve problems");
    }
}
let RahulObj = new Engineer();

//Super keyword
//It is used to call the constructor of its parent class to access the parent's properties and methods
super(args);
super.parentMethod(args);
 
//Error handling (try-catch)
let a = 5;
let b = 10;
console.log(a);
console.log(b);
console.log(a+c);
try {
    console.log(c);
} catch(err) {
    console.log(err);
}
