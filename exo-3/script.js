console.log("exercice 3");

$(document).ready(function(){
    let $h1 = $('.jumbotron h1');
    let $tagline = $('.jumbotron p');
    let $navbar = $('#myNavbar ul').not('.navbar-right');
    let $glyphicon = $('.glyphicon-log-in');
    let $footer = $('footer p');
    let $firstLine = $('.container-fluid.bg-3.text-center:first .col-sm-3 p');
    let $img = $('img');

    $h1.text('Florent');
    $tagline.text('La vie c\'est comme une boîte de chocolats!!!');
    $navbar.hide();
    $glyphicon.replaceWith('<span class="glyphicon glyphicon-user"></span>');
    $footer.html('<strong>Copyright 2017</strong>');
    for(let x = 0; x < $firstLine.length; x ++){
        $firstLine.eq(x).text('Mon projet ' + (x+1));
    }
    for(let x = 0; x <$img.length; x ++){
        $('img:eq('+x+')').attr('src',"../0.jpg");
    }
});