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
let numero = -1;
let btnCloseDeplacement = document.querySelectorAll(".deplacementClose");
let cardDeplacement;