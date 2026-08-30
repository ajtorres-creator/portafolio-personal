const botonMensaje = document.getElementById("boton-mensaje");
const mensaje = document.getElementById("mensaje-js");

botonMensaje.addEventListener("click" , function() {
    mensaje.textContent = "¡Gracias por su visita!";
});

const imagenPerfil = document.getElementById("imagen-perfil");
imagenPerfil.addEventListener("mouseover", function() {
    mensaje.textContent = "¡Estas viendo mi foto!";
});

const formulario = document.querySelector("form");
function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensajeFormulario = document.getElementById("mensaje").value;

    if(nombre === "" || correo === "" || mensajeFormulario === "") {
        alert("Por favor, complete los campos.");
        return false;
    } else {
        alert ("¡Formulario enviado exitosamente!");
        return true;
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    validarFormulario();
});