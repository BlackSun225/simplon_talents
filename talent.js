const slide = document.getElementById("slide"); //in connexion.html
const divreg = document.getElementById("reg"); //in connexion.html
const divco = document.getElementById("co"); //in connexion.html
const cocopyright = document.querySelector("#comain #copyright"); //in connexion.html
const showReg = document.querySelector("#slide span.co"); //in connexion.html
const showCo = document.querySelector("#slide span.reg"); //in connexion.html
const button = document.getElementsByTagName("button");  //in connexion.html
const msgco = document.querySelector("div.co");  //in connexion.html
const msgreg = document.querySelector("div.reg");  //in connexion.html
const spanco = document.querySelector("span.co"); //in connexion.html
const spanreg = document.querySelector("span.reg"); //in connexion.html

Array.from(button).forEach(elem => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
  })
});

showCo.addEventListener("click", () => {
  cocopyright.style.animationName = "movecopyrightright";
  cocopyright.style.left = "51%";
  divco.style.width = "55%";
  divco.style.animationName = "";
  divreg.style.animationName = "disappear";
  divreg.style.width = "45%";
  slide.style.animationName = "slideleft";
  slide.style.left = "0";
//slide.style.right = "auto";
  slide.style.background = "var(--mainRed) url('image/pictogram.png') no-repeat";
  slide.style.backgroundSize = "65%"; 
  slide.style.backgroundPosition = "left bottom";
  spanreg.style.display = "none";
  msgreg.style.display = "none";
  spanco.style.display = "inline-block";
  msgco.style.display = "inline-block";
//   msgco.style.opacity = "1";
});

showReg.addEventListener("click", () => {
  cocopyright.style.animationName = "movecopyrightleft";
  cocopyright.style.left = "6%";
  divco.style.animationName = "disappear";
  divco.style.width = "45%";
  divreg.style.animationName = "";
  divreg.style.width = "55%";
//slide.style.right = "0";
  slide.style.animationName = "slideright";
  slide.style.left = "55%";
  slide.style.background = "var(--black) url('image/pictogramright.png') no-repeat";
  slide.style.backgroundSize = "55%"; 
  slide.style.backgroundPosition = "right bottom";
  spanco.style.display = "none";
  msgco.style.display = "none";
  spanreg.style.display = "inline-block";
  msgreg.style.display = "inline-block";
//msgreg.style.opacity = "1";
});
