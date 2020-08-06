var header = document.querySelector(".container h3");
var myDiv = document.querySelector(".container div");

function setColor(color) {
    header.style.color =  color;
    myDiv.style.background =  color;
    localStorage.setItem("color", color);
    localStorage.setItem("userName", "amer");
}

var color = localStorage.getItem('color');
setColor(color);
