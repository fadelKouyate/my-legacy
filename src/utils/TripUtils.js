
class TripUtils {
    
    static areValidInput(tripFrom, tripTo, trip_intermediate){
        let result = true;
        let message = '';
        
        if(!tripFrom || !tripTo){
            result = false;
            message = "Veillez choisir le départ et l'arrivée du trajet"
        }else if(tripFrom === tripTo){
            result = false;
            message = "Le départ et l'arrivée doivent être différents"
        }else if (trip_intermediate.length > 250){
            result = false;
            message = "Taille du trajet intermédiaire trop longue"
        }

        return { resultat: result, message: message, errorStep: -1}
    }

    static areValidDetailInput(trip_date, trip_hour, trip_place, trip_amount){
        let result = true;
        let message = '';

        if(!trip_date || !trip_hour || !trip_place || !trip_amount){
            result = false;
            message = "Tous les champs ci-dessous sont obligatoires"
        }

        return { resultat: result, message: message, errorStep: -1}
    }

    static isValidComment(trip_comment){
        let result = true;
        let message = '';

        if(trip_comment.length > 250){
            result = false;
            message = "Vous ne pouvez pas dépasser 250 caractères"
        }

        return { resultat: result, message: message, errorStep: -1}
    }
}

export default TripUtils;