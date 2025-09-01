import { Validation } from './Validation.js';

/**
 * Représente un utilisateurs
 * @author Frederic G <frederic.gehin.jobse@gmail.com>
 * @version 1.0
 */
export class Utilisateur 
{
    /**
     * constructeur
     * @param {String} _nom Le nom de l'utilisateur
     * @param {String} _prenom Le prenom de l'utilisateur
     * @param {String} _email  Email de l'utilisateur
     * @param {String} _statut Statut de l'utilisateur (Administrateur, Utilisateur, Invité)
     * @param {String} _section Section de l'utilisateur (CDA, DWWM, DWWN)
     */
    constructor(_nom, _prenom, _email, _statut, _section) {
        this.nom = _nom;
        this.prenom = _prenom;
        this.email = _email;
        this.statut = _statut;
        this.section = _section;
        
    }       

    estValide() {
        try {
        let validation = new Validation();
        validation.formulaireOk(this.nom, this.prenom, this.email, this.statut, this.section);        } 
        catch (error) {
            throw error;
        }
    }

    /**
     * Calcule et retourne le prix TTC de l'article
     * @returns {Number} Le prix TTC
     */
    prixTTC() {
        return this.prixHT * (1 + this.tva / 100);
    }
}
