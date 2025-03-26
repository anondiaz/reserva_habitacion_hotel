// Elementos manipulables
const formReserva = document.forms["formReserva"];
const nombreHTML = document.getElementById("nombre")
const apellidoHTML = document.getElementById("apellido");
const adultosHTML = document.getElementById("adultos");
const niniosHTML = document.getElementById("ninios");
const entradaHTML = document.getElementById("entrada");
const salidaHTML = document.getElementById("salida");
const entrada = new Date()
let errorDatos = ""

// Texto descriptivo en el campo nombre
nombreHTML.setAttribute("placeholder", "Escribe tu nombre")

// mensaje de error en caso de que se escriba mal
nombreHTML.addEventListener("change", () => {
  let nombre = nombreHTML.value.trim();
  // Validacion de los espacios
  if (nombre.length < 2) {
    document.getElementById("errorNombre").textContent =
      "Hay que introducir un nombre valido";
    nombreHTML.addEventListener('focusin', () => {
        document.getElementById("errorNombre").textContent = ""
        nombreHTML.value = ""
    });
    errorDatos = "Hay que introducir un nombre valido";
  }
});
nombreHTML.addEventListener('focusout', () => {
    nombreHTML.value = nombreHTML.value.trim();
});

// mensaje de error en caso de que se escriba mal
apellidoHTML.addEventListener("change", () => {
  let apellido = apellidoHTML.value.trim();
  // Validacion de los espacios
  if (apellido.length < 2) {
    document.getElementById("errorApellido").textContent =
      "Hay que introducir un texto de al menos dos caracteres";
    apellidoHTML.addEventListener('focusin', () => {
        document.getElementById("errorApellido").textContent = ""
        apellidoHTML.value = ""
    });
    errorDatos = "Hay que introducir un texto de al menos dos caracteres";
  }
});

//Control de fechas
let salida = new Date(entrada)
salida.setDate(salida.getDate() + 1)
console.log(salida);

const entradaString = entrada.toISOString().split('T')[0]
let salidaString = salida.toISOString().split('T')[0]

entradaHTML.setAttribute("value", entradaString)
entradaHTML.setAttribute("min", entradaString)
salidaHTML.setAttribute("value", salidaString)
salidaHTML.setAttribute("min", salidaString)

entradaHTML.addEventListener("change", () => {
    salida = new Date(entradaHTML.value)
    salida.setDate(salida.getDate() + 1)
    salidaString = salida.toISOString().split('T')[0]
    salidaHTML.setAttribute("value", salidaString)
    salidaHTML.setAttribute("min", salidaString)
    // console.log(salidaHTML);
});

// Obtener el objeto dialog (Ventana emergente)

const ventanaReserva = document.getElementById('ventanaReserva')

// Formulario
formReserva.addEventListener("submit", (e) => {
  e.preventDefault();
    // formReserva["nombre"].value;
    // formReserva["apellido"].value;
    // formReserva["adultos"].value;
    // formReserva["ninios"].value;
    // formReserva["entrada"].value;
    // formReserva["salida"].value;
    // console.log(`Hola ${nombre} ${apellido}, has hecho una reserva para ${adultos} adultos y ${ninios} niños, con fecha de entrada ${entrada} y fecha de salida ${salida}`);
    let resumenReservaDialog = `<p>Reserva realizada a nombre de : <span>${formReserva['nombre'].value} ${formReserva['apellido'].value}</span></p>`;
    resumenReservaDialog += `<p>Adultos :<span>${formReserva['adultos'].value}</span> - Niños :<span>${formReserva['ninios'].value}</span></p>`;
    resumenReservaDialog += `<p>Fecha de entrada :<span>${formReserva['entrada'].value}</span></p>`;
    resumenReservaDialog += `<p>Fecha de salida :<span>${formReserva['salida'].value}</span></p>`;
    resumenReservaDialog += `<p>Regimen de estancia :<span>${formReserva['estancia'].value}</span></p>`;
    document.getElementById('resumenReserva').innerHTML = resumenReservaDialog
    ventanaReserva.showModal()

});

