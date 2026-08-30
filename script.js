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

const botonTema = document.getElementById("boton-tema");
function CambiarTema () {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")){
        localStorage.setItem("tema", "oscuro");
        botonTema.textContent = "Modo claro";
    } else {
        localStorage.setItem("tema", "claro");
        botonTema.textContent = "Modo oscuro";
    }
}
botonTema.addEventListener("click", CambiarTema);
const temaGuardado = localStorage.getItem("tema");

if(temaGuardado === "oscuro") {
    document.body.classList.add("modo oscuro");
    botonTema.textContent ="modo claro";
}
