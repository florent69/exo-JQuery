console.log("exercice 5");

$(document).ready(function () {
// 1. trouvez sur internet trois images : une de pierre, une de feuille et l'autre de ciseaux;
// 2. créez dans votre page HTML une section qui contient ces trois images sur une même ligne;

// 3. l'utilisateur va cliquer sur une image afin de faire son choix.
// En utilisant des sélecteurs JQuery, faites en sorte que lorsque l'utilisateur clique sur une image, son choix s'affiche dans la console.
// 4. maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur;
    let $img = $('img');
    let $div = $('<div class="image text-center"></div>');
    let $addRock = $('.container div:last');
    $img.on('click', (event) => {
        $div.attr('id', 'userChoice').text($(event.currentTarget).attr('alt'));
        $addRock.after($div);
    });


// 5. créez une div avec l'id computerChoice et y mettre dedans le choix de l'ordinateur que vous avez obtenu suite à l'appel de la fonction getComputerChoice créée dans le cours précédent;

// 6. ajoutez une div pour afficher le résultat, le texte doit être vert si vous avez gagné, gris en cas d'égalité et rouge si vous avez perdu.

// Bonus : essayez de recréer l'interface de [cette page web](https://www.koreus.com/jeu/ciseauxpapiercaillou.html) avec tous les effets, le calcul du score etc...


});