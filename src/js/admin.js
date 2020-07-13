import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap'

import '../css/style.css'




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