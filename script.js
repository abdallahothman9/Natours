let modal = document.getElementById("modal");
let btn = document.querySelector("#btn");
btn.addEventListener("mouseover", function () {
  modal.style.display = "none";
});
let display = document.querySelector(".btn-display");
display.addEventListener("dblclick", function () {
  modal.style.display = 'Block';
 
});
console.dir(display)
console.log(display)