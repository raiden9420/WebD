let button = document.getElementById('btn');

// button.addEventListener('click', ()=>{
//     alert('Button Clicked');
// })

button.addEventListener('dblclick', ()=>{
    document.querySelector(".box").innerHTML = "<b>Double Clicked</b>";
}) 

document.querySelector(".box").addEventListener("click", () => {
    alert("box clicked");
});