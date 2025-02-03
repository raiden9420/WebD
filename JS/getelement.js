let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "blue";

document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box")[1].style.backgroundColor = "yellow";

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "purple";
})

document.querySelector(".container").innerHTML
document.querySelector(".container").outerHTML
document.querySelector(".container").tagName
document.querySelector(".container").textContent