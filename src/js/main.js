/**
 * Main.js - Point d'entrée de l'application fil rouge gestion utilisateurs
 * @author Frederic G <frederic.gehin.jobse@gmail.com>
 * @version 1.0
 */

import { Utilisateur } from 'Utilisateur.js';

const formulaire = document.getElementById('formulaire');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const statut = document.getElementById('statut');
const section = document.getElementById('section'); // conteneur des utilisateurs ajoutés

/**
 * Lorsque le formulaire est soumis : 
 * 1. Récupère les données du formulaire
 * 2. Crée une instance d'une classe repésentant 1 article
 * 3. Valide les données de l'objet
 * 4. Appelle la fonction qui ajoute l'article validé dans la page HTML
 * 5.(Bonus) Sauvegarde les articles dans le stockage local du navigateur
 */

formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // 1. Récupère les données du formulaire
    const nomValue = nom.value;
    const prenomValue = prenom.value;
    const emailValue = email.value;
    const statutValue = statut.value;
    const sectionValue = section.value;

    // 2. Crée une instance d'une classe repésentant 1 utilisateur
    const utilisateur = new Utilisateur(nomValue, prenomValue, emailValue, statutValue, sectionValue);

    try {
        // 3. Valide les données de l'objet
        utilisateur.estValide();

        // 4. Appelle la fonction qui ajoute l'utilisateur validé dans la page HTML
        ajouterUtilisateur(utilisateur);

        // 5.(Bonus) Sauvegarde les utilisateurs dans le stockage local du navigateur
        sauvegarderUtilisateur(utilisateur);

        // Réinitialise le formulaire après soumission réussie
        formulaire.reset();
    } catch (error) {
        alert(error.message);
    }
});