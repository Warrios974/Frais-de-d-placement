function delete_deplacement(e)
{
    let moinPlus = false;
    numero --;
    e.preventDefault;
    // Supprimer le parent
    e.parentNode.parentNode.removeChild(e.parentNode);
    btnCloseDeplacementDisplayNone();
    btnCloseDeplacementDisplayBlock();
    initNombreDeplacement(moinPlus);
}

function ajoutDeplacement(){
    var newDiv = document.createElement("div");
    newDiv.classList.add(`cardDplacement`);
    
    divDeplacement
        .appendChild(newDiv)
        .innerHTML = `  <h2> Déplacement n°${numero+1}</h2>
                        <div class="form__champs cardDplacement__champ">
                            <label for="dateDeplacement${numero+1}">Date</label>
                            <input type="date" name="dateDeplacement${numero+1}" id="dateDeplacement${numero+1}">
                        </div>
                        <div class="form__champs cardDplacement__champ">
                            <label for="objetDeplacement${numero+1}">Objet du déplacement</label>
                            <input type="text" name="objetDeplacement${numero+1}" id="objetDeplacement${numero+1}"> 
                        </div>
                        <div class="form__champs cardDplacement__champ">
                            <label for="adresseDepartDeplacement1">Adresse de départ</label>
                            <input type="text" name="adresseDepartDeplacement${numero+1}" id="adresseDepartDeplacement${numero+1}"> 
                        </div>
                        <div class="form__champs cardDplacement__champ">
                            <label for="adresseArriverDeplacement${numero+1}">Adresse d'arriver</label>
                            <input type="text" name="adresseArriverDeplacement${numero+1}" id="adresseArriverDeplacement${numero+1}"> 
                        </div>
                        <div class="form__champs cardDplacement__champ">
                            <label for="distanceDeplacement${numero+1}">Distance parcouru (km)</label>
                            <input type="number" step="0.01" name="distanceDeplacement${numero+1}" id="distanceDeplacement${numero+1}">
                        </div>
                        <div class="form__champs cardDplacement__champ">
                            <label for="deplacementDepuisDomicile${numero+1}">Déplacement depuis votre domicile</label>
                            <input type="checkbox" name="deplacementDepuisDomicile${numero+1}" id="deplacementDepuisDomicile${numero+1}">
                        </div>
                        <a class="deplacementClose cardDplacement__btnCloseCard" onclick="delete_deplacement(this)">X</a>`
}


function initBtnCloseDeplacement() {
    btnCloseDeplacement = document.querySelectorAll(".deplacementClose");
} 

function btnCloseDeplacementDisplayNone() {
    let numMoinOne = numero - 1;
    if(btnCloseDeplacement[numMoinOne]){
        btnCloseDeplacement[numMoinOne].style.display = "none"; 
    }
}

function btnCloseDeplacementDisplayBlock() {
    if(numero >= 0){
        btnCloseDeplacement[numero].style.display = "block"; 
    }
}

function additionTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

function addGlobalInfo(datedujour,nom,prenom,adresseDemandeur,codePostale,distanceDomicileLieuTravail,nombreDeplacement) {

    documentGlobalInfo
        .innerHTML = `  <p>Date : <strong>${datedujour}</strong></p>
                        <p>Nom : <strong>${nom}</strong></p>
                        <p>Prénom : <strong>${prenom}</strong></p>
                        <p>Adresse : <strong>${adresseDemandeur}</strong></p>
                        <p>Code postal : <strong>${codePostale}</strong></p>
                        <p>Distance entre votre domicile et votre lieu de travail (km) : <strong>${distanceDomicileLieuTravail}</strong> km</p>
                        <p>Nombre de déplacement : <strong>${nombreDeplacement}</strong></p>
                        <p><i>Règlement par virement bancaire</i></p>
                            `;
}

function addDeplacement(dateDeplacement,objetDeplacement,adresseDepartDeplacement,adresseArriverDeplacement,distanceDeplacement) {
    var newTr = document.createElement("tr");
    documentDeplacements
        .appendChild(newTr)
        .innerHTML = `  <td>${dateDeplacement}</td>
                        <td>${objetDeplacement}</td>
                        <td>${adresseDepartDeplacement}</td>
                        <td>${adresseArriverDeplacement}</td>
                        <td>${distanceDeplacement}</td>
                            `;
}

function addBilan(totalDistanceParcouru,totaldistancesDomicileLieuTravail,totalDistanceParcouruIndenisee,totalIndenisee) {
    sectionFormFraisKilometrique.style.display = "none";
    documentBilan
        .innerHTML = `  <p>Total distance parcourue aller/retour (km) : <strong>${totalDistanceParcouru}</strong> km</p>
                        <p>Total distance entre domicile et lieu de travail aller/retour (km) :  <strong>${totaldistancesDomicileLieuTravail}</strong> km</p>
                        <p>Distance indemnisée (km) : <strong>${totalDistanceParcouruIndenisee}</strong> km</p>
                        <p>Vous serez indénisée de : <strong>${totalIndenisee}</strong> €</p>
                            `;
}

function addPrint(btn) {
    window.print();
}

function initNombreDeplacement(moinPlus) {
    moinPlus ? 
    document.getElementById("nombreDeplacement")
        .value = Number(document.getElementById("nombreDeplacement").value) + 1 : 
    document.getElementById("nombreDeplacement")
        .value = Number(document.getElementById("nombreDeplacement").value) - 1;
}

function initDate(date) {
    let newDate = new Date(date);
    return newDate.toLocaleDateString("fr");
}

function selectCV(nombreChevaux){
    switch (nombreChevaux) {
        case "0.502":
            documentCVCheckbox[0].checked = true;
          break;
        case "0.575":
            documentCVCheckbox[1].checked = true;
          break;
        case "0.603":
            documentCVCheckbox[2].checked = true;
          break;
        case "0.631":
            documentCVCheckbox[3].checked = true;
          break;
        case "0.661":
            documentCVCheckbox[4].checked = true;
            break;
        default:
          console.log("Désolé, Aucune case coché");
      }
}

function retour() {
    sectionFormFraisKilometrique.style.display = "block";
    sectionDocument.style.display = "none";
}