const slide = document.getElementById("slide"); 
const divreg = document.getElementById("reg"); 
const divco = document.getElementById("co"); 
const cocopyright = document.querySelector("#comain #copyright"); 
const showReg = document.querySelector("#slide span.co"); 
const showCo = document.querySelector("#slide span.reg"); 
const button = document.getElementsByTagName("button");  
const msgco = document.querySelector("div.co");  
const msgreg = document.querySelector("div.reg");  
const spanco = document.querySelector("span.co"); 
const spanreg = document.querySelector("span.reg"); 
const imgreg = document.querySelector("#comain img.reg"); 
const imgco = document.querySelector("#comain img.co"); 

const connect = document.querySelector("#co button.btn"); 

Array.from(button).forEach(elem => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
  })
});

//animation to show connexion form
showCo.addEventListener("click", () => {
  cocopyright.style.animationName = "movecopyrightright";
  cocopyright.style.left = "61%";
  divco.style.width = "45%";
  divco.style.animationName = "";
  divreg.style.animationName = "disappear";
  divreg.style.width = "55%";
  slide.style.animationName = "slideleft";
  slide.style.left = "0";
  slide.style.background = "var(--mainRed) url('image/pictogram.png') no-repeat";
  slide.style.backgroundSize = "65%"; 
  slide.style.backgroundPosition = "left bottom";
  slide.style.width = "47.5%";
  spanreg.style.display = "none";
  msgreg.style.display = "none";
  spanco.style.display = "inline-block";
  msgco.style.display = "inline-block";
  imgco.style.animationName = "imgout";
  imgco.style.display = "block";
  imgreg.style.animationName = "imgin";
  imgreg.style.display = "none";
});

//animation to show inscription form
showReg.addEventListener("click", () => {
  cocopyright.style.animationName = "movecopyrightleft";
  cocopyright.style.left = "8%";
  divco.style.animationName = "disappear";
  divco.style.width = "45%";
  divreg.style.animationName = "";
  divreg.style.width = "55%";
  slide.style.animationName = "slideright";
  slide.style.left = "55%";
  slide.style.background = "var(--black) url('image/pictogramright.png') no-repeat";
  slide.style.backgroundSize = "55%"; 
  slide.style.backgroundPosition = "right bottom";
  slide.style.width = "45%";
  spanco.style.display = "none";
  msgco.style.display = "none";
  spanreg.style.display = "inline-block";
  msgreg.style.display = "inline-block";
  imgco.style.animationName = "imgin";
  imgco.style.display = "none";
  imgreg.style.animationName = "imgout";
  imgreg.style.display = "block";
});

connect.addEventListener("click", () => {
  sessionStorage.setItem("isTalentCo", "true");
  location.href = "index.html";
});