console.log("exercice 7");

function getData() {
    return data; // data is defined in DATA.js file
}

// 1. créez un tableau HTML avec pour colonne email, nom, prénom, numéro de téléphone;
// 2. créez une fonction addLineToTable qui prend en paramètre un objet et
// dont l'objectif est d'ajouter une ligne à notre tableau avec JQuery.
// La méthode [append](http://api.jquery.com/append/) de JQuery devrait vous aider;

$(document).ready(function () {
    let $inTbody = $('tbody tr:last');
    let addLineToTable = (event) => {
        $inTbody.append($('<tr>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>'));
    };
    $.each(data, function (element, val) {
        console.log(val);

    });
// 3. parcourir le tableau des données et pour chaque élément du tableau,
// ajoutez une ligne dans votre table en appelant la fonction précédemment créée.

// **Bonus 1**: Facebook n'affiche pas tous vos posts d'un coup
// ( ça serait trop long et trop gourmand en terme de ressources pour votre navigateur ).
// Il fait ce que l'on appelle de la [pagination](https://en.wikipedia.org/wiki/Pagination),
// dans notre exemple nous avons 1000 éléments : paginez ces éléments par groupe de 50.

// **Bonus 2**: Faites un champ de recherche sur votre tableau afin de filter les éléments du tableau. Choisissez d'abord une colonne ( par exemple le prénom ) avant de traiter toutes les colonnes.

// **Bonus 3**: Ajoutez la possibilité de trier les lignes de votre tableau par ordre alphabétique.

// **Bonus 4**: Faites un bouton avec un formulaire d'ajout d'une ligne dans votre tableau.

// **Bonus 5**: Faites un bouton de suppression d'une ligne.

// **Bingo 1**: Ajoutez la possibilité d'éditer une ligne du tableau directement dans le tableau comme dans cet [exemple](https://editor.datatables.net/examples/inline-editing/simple).

// **Bingo 2**: Ajoutez un bouton pour pouvoir faire un export CSV de votre tableau.

});