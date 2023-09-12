const profile = document.getElementById("profile");
const talentCo = document.getElementById("talentCo");
const button = document.getElementsByTagName("button");  
const perso = document.getElementById("perso");
const iconblack = document.getElementById("iconblack");
const iconred = document.getElementById("iconred");
const logout = document.getElementById("logout");
const gotoparam = document.querySelector("#perso a:nth-child(1)");
const gotoprofile = document.querySelector("#perso a:nth-child(2)");
const modif = document.getElementsByClassName("modif");
const menu = document.getElementById("menu");
const navdiv = document.getElementById("navdiv");
var see = false;

menu.addEventListener("click", () => {
  see ? navdiv.style.display = "none" : navdiv.style.display = "flex";
  see = !see;
});

var checkCo = sessionStorage.getItem("isTalentCo");
var persoDisplay = false;

if(checkCo === "true") {
  talentCo.style.display = "none";
  profile.style.display = "flex";
}else{
  talentCo.style.display = "inline-block";
  profile.style.display = "none";
}

Array.from(button).forEach(elem => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
  })
});

profile.addEventListener("click", () => {
  persoDisplay = !persoDisplay;
  if(persoDisplay) {
    perso.style.display = "block";
    iconblack.style.display = "none";
    iconred.style.display = "block";
  } else {
    perso.style.display = "none";
    iconblack.style.display = "block";
    iconred.style.display = "none";
  }
});

logout.addEventListener("click", () => {
  sessionStorage.clear();
});

gotoprofile.addEventListener("click", () => {
  location.href="talents.html";
  sessionStorage.setItem("talentName","Bénédicte Anoky");
  sessionStorage.setItem("talentWork","Cheffe de projet Digital");
  sessionStorage.setItem("cv", "true");
});

gotoparam.addEventListener("click", () => {
  location.href = "talents.html";
  sessionStorage.setItem("param","true");
});