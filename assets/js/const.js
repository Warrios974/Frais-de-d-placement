const sectionFormFraisKilometrique = document.getElementById("sectionFormFraisKilometrique");
const formFraisKilometrique = document.getElementById("formFraisKilometrique");
const validateForm = document.getElementById("validationformulaire");
const btnAjoutDeplacement = document.getElementById("ajoutDeplacement"); 
const divDeplacement = document.getElementById("deplacement");
const sectionDocument = document.getElementById("document");

const documentGlobalInfo = document.querySelector(".document__header__globalInfo");
const documentDeplacements = document.querySelector(".document__table > table > tbody");
const documentBilan = document.querySelector(".document__footer__bilan");
const documentBtnPrint = document.querySelector(".document__btnPrint");
const documentCVCheckbox = document.querySelectorAll(".CVCheckbox > input");

// Google parametres
let inputsGoogle;
const api_key = "AIzaSyBgYVS8QtTtLMrsj_CQjU-H7XFHz5h9t44";
/*const center = { lat: 21.133421, lng: 55.537605 };
// Create a bounding box with sides ~10km away from the center point
const defaultBounds = {
  north: center.lat + 0.1,
  south: center.lat - 0.1,
  east: center.lng + 0.1,
  west: center.lng - 0.1,
};*/
const options = {
    componentRestrictions: { country: "reu" },
    fields: ["address_components", "geometry", "icon", "name"],
};
////////////////////////

let numero = -1;
let btnCloseDeplacement = document.querySelectorAll(".deplacementClose");
let cardDeplacement;