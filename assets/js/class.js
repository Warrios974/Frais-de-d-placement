class Deplacement {
    constructor(depuisDomicile,date, objet, adresseA, adresseB, distance){
        this.depuisDomicile = depuisDomicile;
        this.date = date;
        this.objet = objet;
        this.adresseA = adresseA;
        this.adresseB = adresseB;
        this.distance = distance;
    }
    distanceIndemnisee(distanceDomicileTravail){
        if(!this.depuisDomicile){
            return this.distance - 0;
        }else{
            let total = this.distance - distanceDomicileTravail
            if(total <= 0){
                return 0;
            }else{
                return total;
            }
            
        }
    }
    montantIndemnisee(nombreChevaux,distanceDomicileTravail){
        return this.distanceIndemnisee(distanceDomicileTravail) * nombreChevaux;
    }
    distanceDomicileTravailCheck(distanceDomicileTravail){
        if(this.depuisDomicile){
            return distanceDomicileTravail;
        }else{
            return 0;
        }
    }
}

class AtelierManager{
    constructor(listAtelier){
        this.listAtelier = listAtelier;
    }
}
