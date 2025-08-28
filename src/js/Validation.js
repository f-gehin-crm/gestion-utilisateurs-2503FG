

/**
 * Contrôle de données
 */
export class Validation {
    /**
     * Valide un nom
     * @param {String} _nom Le nom à valider
     */
   validerNom(_nom) {
       let nom = _nom.trim();
       if (nom === "") {
           throw new Error("Nom invalide");
       }
       this.nom = nom;

       let regex = /^[A-Za-zÀ-ÿ][a-zA-ZÀ-ÿ]*(?:[ \-\'’][A-Za-zÀ-ÿ][a-zA-ZÀ-ÿ]*)*$/;
       if (!regex.test(nom)) {
           throw new Error("Nom invalide");
       }

   }
    /**
     * Valide un prénom
     * @param {String} _prenom Le prénom à valider
     */ 
    validerPrenom(_prenom) {
        this.validerNom(_prenom);
    }   

    /**
     * Valide un email
     * @param {String} _email L'email à valider
     */
    validerEmail(_email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(_email)) {
            throw new Error("Email invalide");
        }
    }




    
      

}