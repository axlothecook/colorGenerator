let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let outputText = document.querySelector("b");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

function setBackground(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    outputText.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
button.addEventListener("click", function(){
    color1.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    color2.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackground();
})
