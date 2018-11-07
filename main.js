let div1 = document.querySelector(".s3");
let div2 = document.querySelector(".s4");
let div3 = document.querySelector(".s5");

div1.addEventListener("mouseover", fadeIn);
div2.addEventListener("mouseover", fadeIn);
div3.addEventListener("mouseover", fadeIn);

function fadeIn() {
  div1.classList.add("fadeIn");
  div2.classList.add("fadeIn");
  div3.classList.add("fadeIn");
}
