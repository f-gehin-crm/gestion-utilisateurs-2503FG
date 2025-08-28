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