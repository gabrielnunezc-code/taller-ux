const botonSaludo = document.querySelector("#boton-saludo");
const mensaje = document.querySelector("#mensaje");

botonSaludo.addEventListener("click", function () {
  mensaje.textContent = "¡Hola! Gracias por visitar mi página web.";
  botonSaludo.textContent = "¡Saludo enviado!";
});
