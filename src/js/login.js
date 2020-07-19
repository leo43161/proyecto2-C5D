import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap'

import '../css/style.css'

function inputInvalido(input){
    input.className = "form-control is-invalid";
}

function inputValido(input){
    input.className = "form-control is-valid";
}

/* window.validarUsuario = function(value){
    value.preventDefault();
    let correo = document.getElementById("correo");
    let contraseña = document.getElementById("contraseña");
    if(contraseña.value == ""){
        inputInvalido(contraseña);
    }else if (correo.value == ""){
        inputInvalido(correo);
        contraseña.value = "";
    }else if(contraseña.value == "" && correo.value == ""){
        inputInvalido(contraseña);
        inputInvalido(correo);
    }
} */

window.validarCorreo = function(correo){
    let expresion = /\w+@\w+\.[a-z]/;
    if(correo.value != ""){
        if(expresion.test(correo.value)){
            inputValido(correo);
            console.log("esta bien el correo");
        }else{
            inputInvalido(correo);
        }
    }else{
        inputInvalido(correo);
    }
} 

window.validarContraseña = function(contraseña){
    if(contraseña.value != ""){
        if(contraseña.value.length > 7){
            inputValido(contraseña);
        }else{
            inputInvalido(contraseña);
        }
    }else{
        inputInvalido(contraseña);
    }
}