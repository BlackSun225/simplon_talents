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
const modif = document.getElementsByClassName("modif");
const gotoparam = document.querySelector("#perso a:nth-child(1)");
const gotoprofile = document.querySelector("#perso a:nth-child(2)");

const alertbox = document.getElementById("alertbox");
const modifNomFonction = document.getElementById("modifNomFonction");
const delaccount = document.getElementById("delaccount");
const suppr = document.getElementById("suppr");
const editBio = document.getElementById("editBio");
const addComp = document.getElementById("addComp");
const updateComp = document.getElementById("updateComp");
const addForm = document.getElementById("addForm");
const modifForm = document.getElementById("modifForm");
const addExp = document.getElementById("addExp");
const modifExp = document.getElementById("modifExp");
const addCertif = document.getElementById("addCertif");
const modifCertif = document.getElementById("modifCertif");
const blackcross = document.querySelectorAll(".blackcross");

const paramsupbtn = document.querySelector("#param button.supp");

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

//in the nav to display the dropdown
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

var displayCV = sessionStorage.getItem("cv"); //to display the cv when the user click from index
if(displayCV === "true") { //when the user is connected and want to see his infos
  let name = sessionStorage.getItem("talentName");
  let work = sessionStorage.getItem("talentWork");
  talentHome.style.display = "none";
  pages.style.display = "none";
  talentprofile.style.display = "block";
  banniere.children[1].firstElementChild.innerText = name; //set name in banniere
  banniere.children[1].lastElementChild.innerText = work; 
  banniere.querySelector(".pp").firstElementChild.src = "image/image4.png";
  if(name === "Bénédicte Anoky" && work === "Cheffe de projet Digital") {
    Array.from(modif).forEach(elem => {
      elem.style.display = "flex";
    });
    searchTalent.style.display = "none";
  }
  setTimeout(() => { 
    sessionStorage.setItem("cv","false");
  }, 10);
}

var handleParam = sessionStorage.getItem("param"); //display #param when the user click from index
if(handleParam === "true") {
  talentHome.style.display = "none";
  pages.style.display = "none";
  talentprofile.style.display = "block";
  banniere.children[1].firstElementChild.innerText = "Bénédicte Anoky"; //set name in banniere
  banniere.children[1].lastElementChild.innerText = "Cheffe de projet Digital"; 
  banniere.querySelector(".pp").firstElementChild.src = "image/image4.png";
  searchTalent.style.display = "none";
  profilebio.style.display = "none";
  param.style.display = "block";
  Array.from(modif).forEach(elem => {
    elem.style.display = "none"; 
  });
  setTimeout(() => {
    sessionStorage.setItem("param", "false");
  }, 10);
}

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
    Array.from(modif).forEach(elem => {
      elem.style.display = "none";
    });
    searchTalent.style.display = "flex";
  });
});

gotoprofile.addEventListener("click", () => {
  sessionStorage.setItem("talentName", "Bénédicte Anoky");
  sessionStorage.setItem("talentWork", "Cheffe de projet Digital");
  let name = sessionStorage.getItem("talentName");
  let work = sessionStorage.getItem("talentWork");
  talentHome.style.display = "none";
  pages.style.display = "none";
  talentprofile.style.display = "block";
  profilebio.style.display = "block";
  param.style.display = "none";
  banniere.children[1].firstElementChild.innerText = name; //set name in banniere
  banniere.children[1].lastElementChild.innerText = work; 
  banniere.querySelector(".pp").firstElementChild.src = "image/image4.png";
  if(name === "Bénédicte Anoky" && work === "Cheffe de projet Digital") {
    Array.from(modif).forEach(elem => {
      elem.style.display = "flex";
    });
    searchTalent.style.display = "none";
  }
});

gotoparam.addEventListener("click", () => {
  talentHome.style.display = "none";
  pages.style.display = "none";
  talentprofile.style.display = "block";
  banniere.children[1].firstElementChild.innerText = "Bénédicte Anoky"; //set name in banniere
  banniere.children[1].lastElementChild.innerText = "Cheffe de projet Digital"; 
  banniere.querySelector(".pp").firstElementChild.src = "image/image4.png";
  profilebio.style.display = "none";
  searchTalent.style.display = "none";
  param.style.display = "block";
  Array.from(modif).forEach(elem => {
    elem.style.display = "none"; 
  });
});

function displayAlertBoxDiv() {
  alertbox.style.display = "flex";
  document.querySelectorAll("#alertbox > div").forEach(elem => {
    elem.style.display = "none";
  });
}

paramsupbtn.addEventListener("click", () => {
  displayAlertBoxDiv();
  delaccount.style.display = "flex";
  location.href = "#delaccount";
});

document.querySelector("#delaccount img.white").addEventListener("click", () => {
  delaccount.style.display = "none";
  alertbox.style.display = "none";
});

document.querySelectorAll("#delaccount .btn").forEach(elem => {
  elem.addEventListener("click", () => {
    delaccount.style.display = "none";
    alertbox.style.display = "none";
  });
});

//on click on .blackcross the pop up and the alertbox disappear
blackcross.forEach(elem => { //click on .blackcross hide #alertbox
  elem.addEventListener("click", (event) => {
    event.currentTarget.parentElement.parentElement.style.display = "none";
    alertbox.style.display = "none";
  });
});

//onclick on a button in a form inside the alertbox
document.querySelectorAll("#alertbox > div .btn").forEach(elem => {
  elem.addEventListener("click", (event) => {
    event.currentTarget.parentElement.parentElement.style.display = "none";
    alertbox.style.display = "none";
  });
});

//onclick on banniere .modif, pop up to modif name and work appear
document.querySelector("#banniere .modif").addEventListener("click", () => {
  displayAlertBoxDiv();
  modifNomFonction.style.display = "block";
});

//onclick on a trash icon the pop up to alert appear
document.querySelectorAll(".imgdel").forEach(elem => {
  elem.addEventListener("click", () => {
    displayAlertBoxDiv();
    suppr.style.display = "block"; 
    location.href = "#suppr";
  })
});

document.querySelector("#bio .modif").addEventListener("click", () => {
  displayAlertBoxDiv();
  editBio.style.display = "block";
  location.href = "#editBio";
});

//add a trick
document.querySelector("#cvComp .add").addEventListener("click", () => {
  displayAlertBoxDiv();
  addComp.style.display = "block";
  location.href = "#addComp";
});

//update tricks
document.querySelector("#cvComp .write").addEventListener("click", () => {
  displayAlertBoxDiv();
  updateComp.style.display = "block";
  location.href = "#updateComp";
});

document.querySelector("#cvForm .add").addEventListener("click", () => {
  displayAlertBoxDiv();
  addForm.style.display = "block";
  location.href = "#addForm";
});

document.querySelectorAll("#cvForm .imgwrite").forEach(elem => {
  elem.addEventListener("click", () => {
    displayAlertBoxDiv();
    modifForm.style.display = "block";
    location.href = "#modifForm";
  });
})

document.querySelector("#cvExp .add").addEventListener("click", () => {
  displayAlertBoxDiv();
  addExp.style.display = "block";
  location.href = "#addExp";
});

document.querySelectorAll("#cvExp .imgwrite").forEach(elem => {
  elem.addEventListener("click", () => {
    displayAlertBoxDiv();
    modifExp.style.display = "block";
    location.href = "#modifExp";
  });
})

document.querySelector("#certif .modif").addEventListener("click", () => {
  displayAlertBoxDiv();
  addCertif.style.display = "block";
  location.href = "#addCertif";
});

document.querySelectorAll("#certif .imgwrite").forEach(elem => {
  elem.addEventListener("click", () => {
    displayAlertBoxDiv();
    modifCertif.style.display = "block";
    location.href = "#modifCertif";
  });
})
