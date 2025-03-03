<?php
// Verifica si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    // Conexión a la base de datos
    $servername = "localhost"; // Host de la base de datos
    $username = "id21775676_angel_v1"; // Nombre de usuario de la base de datos
    $password = "angel3/aA"; // Contraseña de la base de datos
    $dbname = "id21775676_correos"; // Nombre de la base de datos

    // Crea una conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica la conexión
    if ($conn->connect_error) {
        die("Error de conexión a la base de datos: " . $conn->connect_error);
    }

    // Prepara la consulta SQL para insertar los datos en la tabla
    $sql = "INSERT INTO correos_v1 (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";

    // Ejecuta la consulta
    if ($conn->query($sql) === TRUE) {
        // Muestra un mensaje de alerta
        echo "<script>alert('Datos enviados correctamente');</script>";
        // Redirige al usuario a la página index.html
        echo "<script>window.location.href='contacto.html';</script>";
    } else {
        echo "Error al almacenar los datos: " . $conn->error;
        echo "<script>window.location.href='contacto.html';</script>";
    }

    // Cierra la conexión
    $conn->close();
}

    // Ejecuta la consulta
    if ($conn->query($sql) === TRUE) {
        echo "Datos almacenados correctamente en la base de datos.";
    } else {
        echo "Error al almacenar los datos: " . $conn->error;
    }

    // Cierra la conexión
    $conn->close();

?>