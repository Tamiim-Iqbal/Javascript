let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

mode.addEventListener("click", () => {
    if (currMode === "light")
    {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        mode.style.background = "white";
        mode.style.color = "black";
    }
    else
    {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        mode.style.background = "black";
        mode.style.color = "white";
    }

    console.log(currMode);
})