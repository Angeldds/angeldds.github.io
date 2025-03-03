(function ($) {
    "use strict";
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.boton-subir').fadeIn('slow');
    } else {
        $('.boton-subir').fadeOut('slow');
    }
});
$('.boton-subir').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});
})(jQuery);