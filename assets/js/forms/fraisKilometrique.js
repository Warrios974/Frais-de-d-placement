btnAjoutDeplacement.addEventListener("click", function(e) {
    e.preventDefault;
    numero ++;
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
    let datedujour = e.target.datedujour.value;
    let nom = e.target.nom.value;
    let prenom = e.target.prenom.value;
    let adresseDemandeur = e.target.adresseDemandeur.value;
    let codePostale = e.target.codePostale.value;
    let distanceDomicileLieuTravail = e.target.distanceDomicileLieuTravail.value;
    let nombreChevaux = e.target.nombreChevaux.value;
    let nombreDeplacement = e.target.nombreDeplacement.value;

    cardDeplacement = document.querySelectorAll(".cardDplacement");
    if(cardDeplacement){
        for(let i = 1; i <= nombreDeplacement; i++){
            // Récupération des valeur des champs pour chaque nouveaux deplacements
            let dateDeplacement = document.getElementsByName(`dateDeplacement${i}`);
            let objetDeplacement = document.getElementsByName(`objetDeplacement${i}`);
            let adresseDepartDeplacement = document.getElementsByName(`adresseDepartDeplacement${i}`);
            let adresseArriverDeplacement = document.getElementsByName(`adresseArriverDeplacement${i}`);
            let distanceDeplacement = document.getElementsByName(`distanceDeplacement${i}`);
            let depuisDomicile = document.getElementsByName(`deplacementDepuisDomicile${i}`);

            //Crée un nouvelle objet "Deplacement" a chaque fois, en fonction des valeurs recupérer
            let deplacement = new Deplacement(depuisDomicile[0].checked,dateDeplacement[0].value,objetDeplacement[0].value,adresseDepartDeplacement[0].value,adresseArriverDeplacement[0].value,distanceDeplacement[0].value);

            //Ajout les valeur des calcule de chaque déplacements à leurs tableau repective
            //Pour le calculer la somme final
            indenisee.push(deplacement.montantIndemnisee(nombreChevaux,distanceDomicileLieuTravail));
            distancesIndenisee.push(deplacement.distanceIndemnisee(distanceDomicileLieuTravail));
            distances.push(Number(distanceDeplacement[0].value));
            distancesDomicileLieuTravail.push(Number(deplacement.distanceDomicileTravailCheck(distanceDomicileLieuTravail)));
        }

        //Somme des tableau avec la fonction "additionTableau"
        totalIndenisee = additionTableau(indenisee).toFixed(2);
        totalDistanceParcouruIndenisee =  additionTableau(distancesIndenisee).toFixed(2);
        totalDistanceParcouru =  additionTableau(distances).toFixed(2);
        totaldistancesDomicileLieuTravail =  additionTableau(distancesDomicileLieuTravail).toFixed(2);

        // Function pour afficher la validation
        validate(totalDistanceParcouru,totaldistancesDomicileLieuTravail,totalDistanceParcouruIndenisee,totalIndenisee);
    }
})