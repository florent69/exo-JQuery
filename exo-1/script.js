console.log('exercice 1');

// Ce code s'exécute après le chargement de la page DOM. Ainsi les éléments en HTML peuvent être manipulés avec du JavaScript
// La fonction $() est la fonction magique de jQuery.
// Celle-ci permet de cibler les éléments grâce aux sélecteurs, de déclarer des gestionnaires d'événements, d'utiliser les autres fonctions de la librairie,
// il s'agit en réalité d'un alias sur l'objet jQuery lui-même.
$(document).ready(function(){
    console.log('Je peux maintenant écrire du code JQuery');
});