btnAjoutDeplacement.addEventListener("click", function(e) {
    let moinPlus = true;
    e.preventDefault;
    numero ++;
    initNombreDeplacement(moinPlus);
    ajoutDeplacement();
    initBtnCloseDeplacement();
    btnCloseDeplacementDisplayNone();
});



//Traitement du formulaire
formFraisKilometrique.addEventListener("submit", function(e) {
    e.preventDefault();

    //Initialisation des variables utile
    let indenisee = [];
    let distances = [];
    let distancesIndenisee = [];
    let distancesDomicileLieuTravail = [];

    let totalIndenisee = 0;
    let totalDistanceParcouruIndenisee = 0;
    let totalDistanceParcouru = 0;
    let totaldistancesDomicileLieuTravail = 0;

    //Récupération des valeur des champs de la section "gobale Info"
    let datedujour = initDate(e.target.datedujour.value);
    let nom = e.target.nom.value;
    let prenom = e.target.prenom.value;
    let adresseDemandeur = e.target.adresseDemandeur.value;
    let codePostale = e.target.codePostale.value;
    let distanceDomicileLieuTravail = e.target.distanceDomicileLieuTravail.value;
    let nombreChevaux = e.target.nombreChevaux.value;
    let nombreDeplacement = e.target.nombreDeplacement.value;

    addGlobalInfo(datedujour,nom,prenom,adresseDemandeur,codePostale,distanceDomicileLieuTravail,nombreDeplacement);
    selectCV(nombreChevaux);

    cardDeplacement = document.querySelectorAll(".cardDplacement");
    if(cardDeplacement.length != 0){
        for(let i = 1; i <= nombreDeplacement; i++){
            // Récupération des valeur des champs pour chaque nouveaux deplacements
            let dateDeplacement = document.getElementsByName(`dateDeplacement${i}`);
            let objetDeplacement = document.getElementsByName(`objetDeplacement${i}`);
            let adresseDepartDeplacement = document.getElementsByName(`adresseDepartDeplacement${i}`);
            let adresseArriverDeplacement = document.getElementsByName(`adresseArriverDeplacement${i}`);
            let distanceDeplacement = document.getElementsByName(`distanceDeplacement${i}`);
            let depuisDomicile = document.getElementsByName(`deplacementDepuisDomicile${i}`);
            
            //Crée un nouvelle objet "Deplacement" a chaque fois, en fonction des valeurs recupérer
            let deplacement = new Deplacement(depuisDomicile[0].checked,initDate(dateDeplacement[0].value),objetDeplacement[0].value,adresseDepartDeplacement[0].value,adresseArriverDeplacement[0].value,distanceDeplacement[0].value);

            //Ajout les valeur des calcule de chaque déplacements à leurs tableau repective
            //Pour le calculer la somme final
            indenisee.push(deplacement.montantIndemnisee(nombreChevaux,distanceDomicileLieuTravail));
            distancesIndenisee.push(deplacement.distanceIndemnisee(distanceDomicileLieuTravail));
            distances.push(Number(distanceDeplacement[0].value));
            distancesDomicileLieuTravail.push(Number(deplacement.distanceDomicileTravailCheck(distanceDomicileLieuTravail)));

            addDeplacement(initDate(dateDeplacement[0].value),objetDeplacement[0].value,adresseDepartDeplacement[0].value,adresseArriverDeplacement[0].value,distanceDeplacement[0].value);
        }
        
        //Somme des tableau avec la fonction "additionTableau"
        totalIndenisee = additionTableau(indenisee).toFixed(2);
        totalDistanceParcouruIndenisee =  additionTableau(distancesIndenisee).toFixed(2);
        totalDistanceParcouru =  additionTableau(distances).toFixed(2);
        totaldistancesDomicileLieuTravail =  additionTableau(distancesDomicileLieuTravail).toFixed(2);

        // Function pour afficher la validation
        addBilan(totalDistanceParcouru,totaldistancesDomicileLieuTravail,totalDistanceParcouruIndenisee,totalIndenisee);
        
        sectionDocument.style.display = "block";
        body.style.backgroundColor = "white";

        return true;
    }
    return false;
})