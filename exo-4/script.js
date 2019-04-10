console.log("exercice 4");

$(document).ready(function () {
    // 1. si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire :
    // "Merci nous vous tiendrons informé des différentes offres";
    // 2. récupérer maintenant le contenu de l'input pour adapter votre message :
    // "Merci `adresse email rentrée`, nous vous tiendrons informé des différentes offres`;
    $('button:last').on('click', () => {
        var $mail = $('input[type="email"]').val();
       alert('Merci ' + $mail + ' nous vous tiendrons informé des différentes offres !')
    });
    // 3. si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits';
    let $product = $('#myNavbar li:nth-child(2) [href="#"]').eq(0);
    $product.on('dblclick', () => {
        $product.hide()
    });
    // 4. si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite
    // pour marquer le fait qu'un produit a été ajouté au panier.
    // S'il clique deux fois on doit avoir le texte Cart(2);
    let $article = 0;
    let $cart = $('#myNavbar a:last');
    let $img = $('img');
    // $img.on('click', () => {
    //     $article = $article + 1;
    //     $cart.html('<a href="#">\n' +
    //         '<span class="glyphicon glyphicon-shopping-cart"></span> Cart(' + $article + ')</a>')
    // });
    // 5. un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit.
    // Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit.
    // Vous pouvez ajouter des ids sur les images dans la page HTML.
    // *Bonus*: faire de même sans utiliser les ids;
    // 5. *Bonus ++* : récupérer le nombre de produits que l'utilisateur a achetés.
    // Par exemple si l'utilisateur clique sur l'image ipad alors 'Cart' doit être remplacé par 'Cart(25)'
    // puisque l'offre correspond à 25 ipads...

    for (let x = 0; x < $img.length; x++) {
        $('img:eq(' + x + ')').on('mouseenter', () => {
            console.log('L\'utilisateur regarde l\'image ' + (x+1));
        }).on('click', () => {
            if (x === 0) {
                $article = $article + 25;
            } else if (x === 1) {
                $article = $article + 20;
            } else if (x === 2) {
                $article = $article + 50;
            }
            $cart.html('<a href="#">\n' +
                '<span class="glyphicon glyphicon-shopping-cart"></span> Cart(' + $article + ')</a>')
        })
    }

    // 6. maintenant, traquer si un utilisateur est en train de remplir le champ pour la newsletter.
    // Comment récupérer le fait que l'utilisateur vient de cliquer dans le champ pour rentrer son adresse
    // et comment récupérer le fait que l'utilisateur a tapé quelque chose dedans ?;
    $('input').on('click', () => {
        console.log('un utilisateur est en train de remplir le champ pour la newsletter')
    }).on('input', () => {
        console.log('l\' utilisateur a tapé qelque chose dedans !!');
    });


});