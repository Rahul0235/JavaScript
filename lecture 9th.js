//JavaScript Callbacks, Promises & Async Await

//Sync
//Synchronous : It runs code into sequence 
//Asynchronous : It dont run the code into sequence also it runs many block of code perallely

console.log("Hello");

setTimeout(()=> {
    console.log("Namaste");
}, 2000); //Tiiimeout 4 second = 4000 mili second

console.log("Hii");

//Callbacks
//A callback is function passed as an argument to another function
//Callback Hell : forming pyramid structure Nested callbacks is known as callbacks hell

function getData(dataID, getNextData) {
    //3s
    setTimeout(() => {
        console.log("Data", dataID);
        if (getNextData) {
            getNextData();
        }
    }, 3000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

//Promises and Promise chaining (It was introduce to solve  the problem of callback-hell)
//Promise chaining (It means .then inside .then)
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success");
    reject("Network error");
   });
};

let promise = getPromise();
promise.then(() => {
    console.log("Promises fulfilled");
});

promise.catch((err) => {
   console.log("rejected", err);
});

//Async-Await 
//Async function always return a promise
//Await pauses the execution of its surrounding async function until the promise is settled
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200); //200 means Success msg will print
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); //1st call
    await api(); //2nd call
}

//IIFE: Immediately Invoked Function Expression (It can only used once)
//It is a function that is called immediately as soon as it is defined 
//Syntax
(function () {
    //code...
})();