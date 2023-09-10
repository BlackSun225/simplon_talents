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
//talentHome contain talentList and metier
const talents = document.getElementsByClassName("talent"); //all the talent
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

Array.from(talents).forEach(elem => {
  elem.addEventListener("click", (event) => {
    talentHome.style.display = "none";
    pages.style.display = "none";
    talentprofile.style.display = "block";
    //add informations to the profile page
    let a = event.currentTarget.querySelector(".talentPic");
    let b = event.currentTarget.querySelector(".talentInfos");
    let img = a.firstElementChild.src; //pick img from talent
    let name = b.querySelector(".talentNom").innerText; //pick talent name
    let work = b.querySelector(".talentWork").innerText;//pick talent work
    banniere.querySelector(".pp").firstElementChild.src = img; //set img in banniere
    banniere.children[1].firstElementChild.innerText = name; //set name in banniere
    banniere.children[1].lastElementChild.innerText = work; //set work in banniere
    location.href = "#talentprofile";
  });
});
