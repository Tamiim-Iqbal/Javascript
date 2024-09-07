// Selecting with Id
let myId = document.getElementById("myId");
console.dir(myId);

// Selecting with Class
let myClass = document.getElementsByClassName("myClass");
console.dir(myClass);

// Selecting with Tag
let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);

// Query Selector

let element = document.querySelector("p");
console.dir(element);                                         //returns first element

let elements = document.querySelectorAll("p");
console.dir(elements);                                        //returns a NodeList