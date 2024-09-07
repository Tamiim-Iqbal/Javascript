let div = document.querySelector("div")
console.log(div);
let id = div.getAttribute("id");
console.log(id);                                          

let p = document.querySelector("p")
console.log(p.getAttribute("class"));                         //to get attribute value

p.setAttribute("class", "paragraph");                         //to set the attribute value
console.log(p.getAttribute("class"));          

// div.style.backgroundColor = "Green";                       //to change style

let newBtn = document.createElement("button");                //Create element
newBtn.innerHTML = "End Button";
console.log(newBtn);

let Btn = document.createElement("button");              
Btn.innerHTML = "Start Button";

let before = document.createElement("p");
before.innerHTML = "Adding before the div";

let after = document.createElement("p");
after.innerHTML = "Adding after the div"

div.append(newBtn);                                          //adds at the end of node (inside)
div.prepend(Btn);                                            //adds at the start of node (inside)
div.before(before);                                          //adds before the node (outside)
div.after(after);                                            //adds after the node (outside)

//p.remove();                                                //removes the node

p.classList.add("newClass");                                 //add new class  &  remove():remove class
console.log(p.getAttribute("class"));