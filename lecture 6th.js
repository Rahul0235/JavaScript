//JavaScript DOM (Documnet object model)

//DOM manipulation (use to make changes in HTML file using JavasSript)
//Methode of DOM

//selecting with id
document.getElementById(ById("myId"));

//selection with class
document.getElementsByClassName("myClass");

//selexting with tag
document.getElementsByTagName("p");

//use to print the elements present in document of html 
console.dir(document);

//Query selctor (use to return node list)
//Returns 1st Element
document.querySelector("myId / myClass / tag");

//Returns a NodeList
document.querySelectorAll("myId / myClass / tag")

/*Properties for DOM manipulation
tag name : return tag foe element nodes
innerText : return the text content of the element and all its children
innerHTML : returns the plain text or HTML contents in the elements
textContent : retunrs textual content even for hidden elements
*/

//Attributes
getAttributes(attr);
setAttribute(attr, value)

//Style
node.style

//Insert Element  
let Element = document.createElement("div");

node.append(Element);  //adds at end of node(inside)
node.prepend(Element);  // adds at start of node(inside)
node.before(Element);  //adds before the node(outside)
node.after(Element);  //adds after the node(outside)

//Delete Element
node.remove() //removes the node