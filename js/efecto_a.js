$(document).ready(function () {
    // Inicializa Ripples.js con opciones personalizadas
    $("body").ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  
    // Desactiva Ripples.js en el formulario de inicio de sesión
    $(".login-container").ripples("destroy");
  });
  