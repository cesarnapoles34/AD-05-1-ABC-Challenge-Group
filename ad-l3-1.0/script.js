// a) Lista de colores
const colores = ["green", "blue", "red"];

// b) Función que elige un color al azar
function colorAleatorio() {
    const posicion = Math.floor(Math.random() * colores.length);
    return colores[posicion];
}

// c) A cada h5, cuando le hagan clic, le cambiamos el color
const titulos = document.querySelectorAll("h5");

titulos.forEach(function (h5) {
    h5.addEventListener("click", function () {
        h5.style.color = colorAleatorio();
    });
});