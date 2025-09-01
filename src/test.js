/**
     * Valide un email
     * @param {String} _email L'email à valider
     */
    validerEmail(_email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(_email)) {
            throw new Error("Email invalide");
        }
    }

    /**
     * Valide un prénom
     * @param {String} _prenom Le prénom à valider
     */
    validerPrenom(_prenom) {
        if (_prenom.trim() === "") {
            throw new Error("Prénom invalide");
        }
    }

    /**
     * Valide un nom
     * @param {String} _nom Le nom à valider
     */
    validerNom(_nom) {
        if (_nom.trim() === "") {
            throw new Error("Nom invalide");
        }
    }

    /**
     * Valide un statut
     * @param {String} _statut Le statut à valider
     */
    validerStatut(_statut) {
        const statuts = ["Administrateur", "Utilisateur", "Invité"];
        if (!statuts.includes(_statut)) {
            throw new Error("Statut invalide");
        }
    }

    /**
     * Valide une section
     * @param {String} _section La section à valider
     */
    validerSection(_section) {
        const sections = ["CDA", "DWWM", "DWWN"];
        if (!sections.includes(_section)) {
            throw new Error("Section invalide");
        }
    }
}
import { Utilisateur } from 'Utilisateur.js';


/** bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */
/**
 * Valide une adresse email
 * @param {string} email - L'email à vérifier
 * @returns {Object} - { valide: boolean, erreur: string|null }
 */
function validerEmail(email) {
  // Vérifie que l'entrée n'est pas vide
  if (!email || email.trim() === "") {
    return { valide: false, erreur: "L'adresse email est vide." };
  }

  // Vérifie le type
  if (typeof email !== "string") {
    return { valide: false, erreur: "L'adresse email doit être une chaîne de caractères." };
  }

  // Regex pour une validation générale d'email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    return { valide: false, erreur: "Format de l'adresse email invalide." };
  }

  // Tout est bon
  return { valide: true, erreur: null };
}

// Exemple d'utilisation
console.log(validerEmail("test@example.com")); 
// { valide: true, erreur: null }

console.log(validerEmail("mauvais-email"));
// { valide: false, erreur: "Format de l'adresse email invalide." }

console.log(validerEmail(""));
// { valide: false, erreur: "L'adresse email est vide." }
