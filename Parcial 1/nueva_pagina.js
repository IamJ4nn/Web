// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Obtener los valores de los parámetros
const nombre = urlParams.get("nombre");
const email = urlParams.get("email");
const telefono = urlParams.get("telefono");
const gusto = urlParams.get("gusto");
const porcentaje = urlParams.get("porcentaje");

// Asignar los valores a los elementos del DOM
document.getElementById("nombreResultado").textContent = nombre;
document.getElementById("emailResultado").textContent = email;
document.getElementById("telefonoResultado").textContent = telefono;
document.getElementById("gustoResultado").textContent = gusto;
document.getElementById("porcentajeResultado").textContent = porcentaje;
