

$\

<?php
$destino="gamesprojomi@gmail.com";
$nombre = $_Post["nombre"];
$correo = $_Post["correo"];
$telefono = $_Post["telefono"];
$mensaje = $_Post["mensaje"];
$contenido = "nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
mail($destino,"contacto", $contenido);
header("Location:gracias.html");
?>

