//Create button to change the screen mode from light to dark and dark to light 

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if(currMode === "light"){
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  }else{
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});