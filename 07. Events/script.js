// Event Handling
let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>
{
    console.log("Btn1 was clicked");
                                      
}

let div = document.querySelector("div");
function mouse()
{
    console.log("You are inside div");
     
}


// Event Object
div.onmouseover = mouse;
let btn2 = document.querySelector("#btn2");
btn2.ondblclick = (event) =>
{
    console.log("Btn2 was clicked");
    console.log(event);                                      //event object
    console.log(event.type);
    console.log(event.target);
}  


// Event Listener
let div2 = document.querySelector(".div");
div2.style.backgroundColor = "green";

div2.addEventListener("mouseover", () => {
    console.log("You are inside another div");
})

div2.addEventListener("mouseover", (event) => {
    console.log("Multiple work done by Event Listener!");
    console.log(event.type);
})

const handler1 = () => {
    console.log("Handler1");
}

div2.addEventListener("mouseover", handler1);
// div2.removeEventListener("mouseover", handler1);