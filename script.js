const botonMensaje = document.getElementById("boton-mensaje");
const mensaje = document.getElementById("mensaje-js");

botonMensaje.addEventListener("click" , function() {
    mensaje.textContent = "¡Gracias por su visita!";
});

const imagenPerfil = document.getElementById("imagen-perfil");
imagenPerfil.addEventListener("mouseover", function() {
    mensaje.textContent = "¡Estas viendo mi foto!";
});