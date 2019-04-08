console.log('exercice 2');

$(document).ready(function(){
    console.log($('h4#title')[0]);  // Sélectionner le titre du blog : "John's Blog".
    console.log($('.sidenav')); // Sélectionner tous les éléments du sidemenu de gauche.
    console.log($('footer p')[0]);  // Sélectionner le footer.
    console.log($('.input-group'));  // Sélectionner l'élément qui permet de faire la barre de recherche.
    console.log($('.glyphicon'));  // Sélectionner tous les glyphicons de la page.
    console.log($('.label-success'));  // Sélectionner tous les labels verts.
    console.log($('p.article')[0]);  // Sélectionner tous les paragraphes qui ont comme classe 'intro'.
    // Il n'y a pas d'intro'. Du coup j'ai affiché 'article'
    console.log($('span.glyphicon-time'));  // Sélectionner toutes les images avec toutes les icones dont la classe est 'glyphicon-time'
    console.log($('.sidenav li:first-of-type'));  // Sélectionner le premier élément du sidemenu.
    console.log($('p:even'));  // Bonus : sélectionner un paragraphe sur deux. =
    // :even Éléments pairs
    // :odd Éléments impairs
});
