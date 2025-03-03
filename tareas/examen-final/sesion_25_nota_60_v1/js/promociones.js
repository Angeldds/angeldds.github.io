
/////////////////////////con ID//////////////////////////*/
/*$(document).ready(function() {
    // Al hacer clic en cualquier elemento con la clase '.informacion'
    $(".informacion").click(function(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
        
        // Cerrar todos los otros #info-box que estén abiertos
        $(".package-item #info-box").not($(this).closest('.package-item').find("#info-box")).slideUp();
        
        // Encuentra el elemento #info-box más cercano al elemento clicado y lo muestra/oculta
        $(this).closest('.package-item').find("#info-box").slideToggle();
    });

    // Al hacer clic en cualquier parte del documento
    $(document).click(function(event) {
        // Si el clic no es dentro de un elemento con la clase '.informacion' o en el propio '#info-box', oculta todos los '#info-box'
        if (!$(event.target).closest('.package-item').find('.informacion').length && !$(event.target).is('.boton-cerrar')) {
            $(".package-item #info-box").slideUp();
        }
    });
});

// Función para cerrar el #info-box al hacer clic en el botón de cerrar
$(document).on("click", ".boton-cerrar", function() {
    $(this).closest('.package-item').find("#info-box").slideUp();
});*/



///////////////////////////con clases//////////////////////////////////
$(document).ready(function() {
    // Al hacer clic en cualquier elemento con la clase '.informacion'
    $(".informacion").click(function(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
        
        // Cerrar todos los otros .info-box que estén abiertos
        $(".package-item .info-box").not($(this).closest('.package-item').find(".info-box")).slideUp();
        
        // Encuentra el elemento .info-box más cercano al elemento clicado y lo muestra/oculta
        $(this).closest('.package-item').find(".info-box").slideToggle();
    });

    // Al hacer clic en cualquier parte del documento
    $(document).click(function(event) {
        // Si el clic no es dentro de un elemento con la clase '.informacion' o en el propio '.info-box', oculta todos los '.info-box'
        if (!$(event.target).closest('.package-item').find('.informacion').length && !$(event.target).is('.boton-cerrar')) {
            $(".package-item .info-box").slideUp();
        }
    });
});

// Función para cerrar el .info-box al hacer clic en el botón de cerrar
$(document).on("click", ".boton-cerrar", function() {
    $(this).closest('.package-item').find(".info-box").slideUp();
});
