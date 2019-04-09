console.log("exercice 3");

$(document).ready(function () {
    // 1. changez le titre "My portfolio" par votre prénom.;
    let $h1 = $('.jumbotron h1');
    $h1.text('Florent');
    // 2. changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant;
    let $tagline = $('.jumbotron p');
    $tagline.text('La vie c\'est comme une boîte de chocolats!!!');
    // 3. votre portfolio ne comprendra qu'une page :
    // supprimez la navigation de la navbar mais laissez le bouton Login;
    let $navbar = $('#myNavbar ul').not('.navbar-right');
    $navbar.hide();
    // 4. changez l'icone de ce bouton d'ailleurs, elle n'est pas très jolie,
    // choisissez en une dans  la [liste possible de bootstrap] :
    // (https://getbootstrap.com/docs/3.3/components/#glyphicons-glyphs);
    let $glyphicon = $('.glyphicon-log-in');
    $glyphicon.replaceWith('<span class="glyphicon glyphicon-user"></span>');
    // 5. changez votre footer en mettant **Copyright 2017** ( respecter le gras );
    let $footer = $('footer p');
    $footer.html('<strong>Copyright 2017</strong>');
    // 6. modifiez le texte des paragraphes de la première ligne d'images.
    // Tous les textes "Some text..." doivent être remplacés par "Mon projet";
    // *Bonus*: ajouter le numéro du projet c'est à dire 'Mon projet 1' 'Mon projet 2'...
    let $line = $('.container-fluid.bg-3.text-center .col-sm-3 p'); // Toutes les images
    let $firstLine = $('.container-fluid.bg-3.text-center:first .col-sm-3 p');  // 1ère ligne
    for (let x = 0; x < $firstLine.length; x++) {
        $firstLine.eq(x).text('Mon projet ' + (x + 1));
    }
    for (let x = 0; x < $line.length; x++) {
        $line.eq(x).text('Mon projet ' + (x + 1));
    }
    // 7. choisissez une image sur internet et changez toutes les images du projet par cette image.
    // *Bonus*: personnalisez chacune des images;
    let $img = $('img');
    for (let x = 0; x < $img.length; x++) {
        $('img:eq(' + x + ')').attr('src', "../" + x +".jpg").width('400px');
    }
    // 8. vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio.
    // De plus, comme c'est le dernier,
    // vous souhaitez qu'il apparaisse au dessus des autres et qu'il soit plus grand pour être mis en valeur.
    // Choisissez une image et un texte et ajoutez le au-dessous de "Some of my work".
    // Ajustez la taille de l'image pour être de 250px de haut;
    // let $addImg = $('#work1');
    var $figureTag = $("<figure>");
    var $addImg = $('#work1');
    $addImg.prepend($figureTag);
    var $image = $('<img />',
        { id: 'myId',
            src: "../8.jpg",
            width: 600
        })
        .appendTo($figureTag);
    var $figcaption = $("<figcaption>").appendTo($figureTag);
    $figcaption.text("En plein taff !!! ");
    // 9. la classe intro a été définie dans le fichier 'index.css'.
    // Ajoutez cette classe au footer afin de changer l'affichage en rouge.
    $footer.addClass('intro');


});