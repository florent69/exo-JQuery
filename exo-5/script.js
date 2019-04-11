console.log("exercice 5");

$(document).ready(function () {
// 1. trouvez sur internet trois images : une de pierre, une de feuille et l'autre de ciseaux;
// 2. créez dans votre page HTML une section qui contient ces trois images sur une même ligne;


// 4. maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur;
        let $userChoice = $('<div></div>').attr('id', 'userChoice').addClass("image text-center ");
        let $divFont = $('<div></div>').attr('style', 'font-size:100px');
        $divFont.append($userChoice);
        let $addRock = $('.container div:last');
        // 5. créez une div avec l'id computerChoice
        let $divComputer = $('<div></div>').attr('id', 'computerChoice');
        // 6. ajoutez une div pour afficher le résultat
        let $result = $('<div></div>').attr('id', 'result');
        let $img = $('img');
        $img.on('click', (event) => {
            // 3. l'utilisateur va cliquer sur une image afin de faire son choix.
// En utilisant des sélecteurs JQuery, faites en sorte que lorsque l'utilisateur clique sur une image, son choix s'affiche dans la console.
            $userChoice.text('Your Choice is : ' + $(event.currentTarget).attr('alt'));
            console.log($userChoice.text());
            $addRock.after($divFont);
            // 5. et y mettre dedans le choix de l'ordinateur que vous avez obtenu suite
            // à l'appel de la fonction getComputerChoice créée dans le cours précédent;
            const computerChoice = getComputerChoice();
            $divComputer.text('Computer is : ' + computerChoice);
            console.log($divComputer.text());
            $divFont.append($divComputer);
            // 6. le texte doit être vert si vous avez gagné,
            // gris en cas d'égalité et rouge si vous avez perdu.
            let winner = determineWinner($(event.currentTarget).attr('alt'), computerChoice);
            console.log(winner);
            $result.text(winner);
            $divFont.append($result);
        });
// Bonus : essayez de recréer l'interface de [cette page web](https://www.koreus.com/jeu/ciseauxpapiercaillou.html) avec tous les effets, le calcul du score etc...
    }
);