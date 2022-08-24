function delete_deplacement(e)
{
    numero --;
    e.preventDefault;
    // Supprimer le parent
    e.parentNode.parentNode.removeChild(e.parentNode);
    btnCloseDeplacementDisplayNone();
    btnCloseDeplacementDisplayBlock();
}

function ajoutDeplacement(){
    var newDiv = document.createElement("div");
    newDiv.classList.add(`cardDplacement`);
    
    divDeplacement
        .appendChild(newDiv)
        .innerHTML = `  <h2> Déplacement n°${numero+1}</h2>
                        <div class="form__champs cardDplacement__champ">
                            <input type="checkbox" name="deplacementDepuisDomicile${numero+1}" id="deplacementDepuisDomicile${numero+1}">
                            <label for="deplacementDepuisDomicile${numero+1}">Déplacement depuis votre domicile</label>
                        </div>
                        <div class="form__champs cardDplacement__champ">
                            <label for="dateDeplacement${numero+1}">Date</label>
                            <input type="datetime-local" name="dateDeplacement${numero+1}" id="dateDeplacement${numero+1}">
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
                        <a class="deplacementClose form__btn cardDplacement__btnCloseCard" onclick="delete_deplacement(this)">X</a>`
}


function initBtnCloseDeplacement() {
    btnCloseDeplacement = document.querySelectorAll(".deplacementClose");
    console.log(btnCloseDeplacement);
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