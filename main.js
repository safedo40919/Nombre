//escuchar click

const botonConstante = document.getElementById("boton")
botonConstante.addEventListener("click",preguntarNombre)

//guardar headings
const h1Constante = document.getElementById("h1")
const h2Constante = document.getElementById("h2")

//preguntar nombre
function preguntarNombre(){
    const nombre = prompt("Escribe tu nombre")
    insertarNombre(nombre)
}

//insertar nombre en los puntos 
function insertarNombre(nombre){
    h1.textContent =nombre 
    h2.textContent ="Hola"
}