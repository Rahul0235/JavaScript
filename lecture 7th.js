//JavaScript Events

//The change in state of an object is known as events(click button, form submit, print event, kepress)
/*Events are made by user and also it are enviromental made
ex.battery low
ex.keypress*/

//Event handling in JS and diffrent types of handlig a event
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("You were inside div");
};

//If we handle event in Inline(In html) and aslo in JS then it will take JS as priority
//If we have handle event once than we cannot handle it double time because it will override

//Evenet object (It is a special object that has details about event)
btn1.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

//Event Listeners (use for multiple event handling)
//Add events
btn1.addEventListener("click", () =>{
    console.log("button1 was clickm- handler1")
});
btn1.addEventListener("click", () =>{
    console.log("button1 was click - handler2")
});
btn1.addEventListener("click", () =>{
    console.log("button1 was click - handler3")
});

const handler3 = () =>{
    console.log("button1 was click - handler4")
};
btn1.addEventListener("click", handler3);

//Remove events
btn1.removeEventListener("click", handler3);