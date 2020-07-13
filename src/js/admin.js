import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap'

import '../css/style.css'

import Funko from './funko.js'

//Inicializar las variables (darles valor)
let listaFunko = [];

//function agregarFunko(event) {

window.agregarFunko = function (event) {

    event.preventDefault();

    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let numSerie = document.getElementById("numSerie").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;
    let precio = document.getElementById("precio").value;
    //validar datos del formulario

    let nuevoFunko = new Funko(codigo, nombre, numSerie, categoria, descripcion, imagen, precio);

    console.log(nuevoFunko);

};


//Validacion del formulario

window.revisar = function(input) {
    if (input.value == "") {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
};

window.revisarNumero = function (input) {
    if (isNaN(input.value) || input.value == "") {
        input.className = "form-control is-invalid"
        return false;

    } else {
        input.className = "form-control is-valid";
        return true;
    }
}

window.revisarLongitud = function (input) {
    if (input.value != "" && input.value.length >= 10) {
        input.className = "form-control is-valid"
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}