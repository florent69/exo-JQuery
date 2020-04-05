console.log("exercice 8");

var carousel;
$(document).ready(function () {
    carousel = $("ul");
    carousel.itemslide(
        {
            disable_slide: false,
            duration: 150
        }
    );
});