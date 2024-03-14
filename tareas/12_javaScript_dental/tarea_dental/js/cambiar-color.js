// Obtener la barra de navegación
var navbar = document.getElementById("navbar");

// Agregar evento de scroll para controlar el cambio de color de la barra de navegación
window.addEventListener("scroll", function() {
  // Verificar si se ha desplazado más allá de cierta cantidad de píxeles desde la parte superior
  if (window.scrollY > 50) { // Cambia 50 según tu preferencia
    navbar.classList.add("scrolled"); // Agregar la clase "scrolled" para cambiar el color
  } else {
    navbar.classList.remove("scrolled"); // Remover la clase "scrolled" para volver al color predeterminado
  }
});
