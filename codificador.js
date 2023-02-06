// Obtener los elementos del HTML
let textoEntrada = document.getElementById("textoEntrada");
let textoSalida = document.getElementById("textoSalida");
let btnCodificar = document.getElementById("codificar");
let btnDecodificar = document.getElementById("decodificar");

// Añadir evento al boton codificar
btnCodificar.addEventListener("click", function() {
    // Obtener el texto de entrada
    let texto = textoEntrada.value;
    // Codificar el texto
    let textoCodificado = btoa(texto);
    // Mostrar el texto codificado en el texto de salida
    textoSalida.value = textoCodificado;
});

// Añadir evento al boton decodificar
btnDecodificar.addEventListener("click", function() {
    // Obtener el texto de entrada
    let texto = textoEntrada.value;
    // Decodificar el texto
    let textoDecodificado = atob(texto);
    // Mostrar el texto decodificado en el texto de salida
    textoSalida.value = textoDecodificado;
});
