btnAjoutDeplacement.addEventListener("click", function(e) {
    e.preventDefault;
    numero ++;
    ajoutDeplacement();
    initBtnCloseDeplacement();
    btnCloseDeplacementDisplayNone();
});



//Post traitement
formFraisKilometrique.addEventListener("submit", function(e) {
    e.preventDefault();
    let indenisee = [];
    let distances = [];
    let distancesIndenisee = [];
    let distancesDomicileLieuTravail = [];

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
            let dateDeplacement = document.getElementsByName(`dateDeplacement${i}`);
            let objetDeplacement = document.getElementsByName(`objetDeplacement${i}`);
            let adresseDepartDeplacement = document.getElementsByName(`adresseDepartDeplacement${i}`);
            let adresseArriverDeplacement = document.getElementsByName(`adresseArriverDeplacement${i}`);
            let distanceDeplacement = document.getElementsByName(`distanceDeplacement${i}`);
            let depuisDomicile = document.getElementsByName(`deplacementDepuisDomicile${i}`);

            let deplacement = new Deplacement(depuisDomicile[0].checked,dateDeplacement[0].value,objetDeplacement[0].value,adresseDepartDeplacement[0].value,adresseArriverDeplacement[0].value,distanceDeplacement[0].value);

            indenisee.push(deplacement.montantIndemnisee(nombreChevaux,distanceDomicileLieuTravail));
            distancesIndenisee.push(deplacement.distanceIndemnisee(distanceDomicileLieuTravail));
            distances.push(Number(distanceDeplacement[0].value));
            distancesDomicileLieuTravail.push(Number(deplacement.distanceDomicileTravailCheck(distanceDomicileLieuTravail)));
        }
        let totalIndenisee = 0;
        let totalDistanceParcouruIndenisee = 0;
        let totalDistanceParcouru = 0;
        let totaldistancesDomicileLieuTravail = 0;

        for (let i = 0; i < indenisee.length; i++) {
            totalIndenisee += indenisee[i];
            totalDistanceParcouruIndenisee += distancesIndenisee[i];
            totalDistanceParcouru += distances[i];
            totaldistancesDomicileLieuTravail += distancesDomicileLieuTravail[i];
        }

        totalIndenisee = totalIndenisee.toFixed(2);

        validate(totalDistanceParcouru,totaldistancesDomicileLieuTravail,totalDistanceParcouruIndenisee,totalIndenisee);
    }
})