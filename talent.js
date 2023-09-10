const profile = document.getElementById("profile");
const talentCo = document.getElementById("talentCo");
const button = document.getElementsByTagName("button");  
const perso = document.getElementById("perso");
const iconblack = document.getElementById("iconblack");
const iconred = document.getElementById("iconred");
const logout = document.getElementById("logout");

const talentSection = document.getElementById("talentSection"); 
//talentSection contain searchTalent, talentHome, pages and talentprofile
const searchTalent = document.getElementById("searchTalent");
const talentHome = document.getElementById("talentHome");
const pages = document.getElementById("pages"); //ul inside talentSection
const talentprofile = document.getElementById("talentprofile");
//talentprofile contain banniere, profilebio and param
const banniere = document.getElementById("banniere");
const profilebio = document.getElementById("profilebio");
//profilebio contain bio, cv and autretalents
const param = document.getElementById("param");


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
