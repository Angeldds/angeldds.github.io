<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    
    $destinatario = "editortec10@gmail.com";

  
    $asunto = "Nuevo mensaje de contacto desde el formulario";

    
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo electrónico: $email\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo)) {
        echo "¡El mensaje se ha enviado correctamente!";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.";
    }
}
?>
