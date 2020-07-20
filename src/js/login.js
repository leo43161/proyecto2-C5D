import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/style.css";
import { User } from "./user";

let userlist = [];
defaultUser();

//Create a new user in case none exist before
function defaultUser() {
  if (localStorage.length == 0) {
    //Localstorage is empty
    console.log("local storage vacio, creando un usuario por defecto");
    userlist.push(new User("admin", null, 1234, dateToday(), null, true)); //Create a new default user and add this to the list
    localStorage.setItem("users", JSON.stringify(userlist)); //Save default user in the localStorage
  } else {
    console.log("no esta vacio");
    validateForm();
  }
}

function inputInvalido(input) {
  input.className = "form-control is-invalid";
}

function inputValido(input) {
  input.className = "form-control is-valid";
}

function validateEmail(email) {
  console.log("llegue");
  let expresion = /\w+@\w+\.[a-z]/;
  if (email.value != "") {
    if (expresion.test(email.value)) {
      inputValido(email);
      console.log("esta bien el mail");
    } else {
      inputInvalido(email);
    }
  } else {
    inputInvalido(email);
  }
}

window.validateEmail = function (email) {
  validateEmail(email);
};

function validatePassword(password) {
  if (password.value != "") {
    if (password.value.length > 7) {
      inputValido(password);
    } else {
      inputInvalido(password);
    }
  } else {
    inputInvalido(password);
  }
}

window.validatePassword = function (password) {
  validatePassword(password);
};

function validateForm() {
  //Si todo esta ok, procedemos a iniciar sesion
  validateEmail(document.getElementById("email"));
  validatePassword(document.getElementById("password"));
  login("admin", 1234);
}

function login(name, password) {
  let _userList = JSON.parse(localStorage.getItem("users"));
  console.log("Lista recuperada de localStorage");
  console.log(_userList);
  verificarDatos(_userList, name, password);
}

function verificarDatos(array, name, password) {
  for (let i in array) {
    console.log(name);
    if (name == array[i].name) {
      //Si se encontro algun usuario con ese nombre
      console.log(`se encontraron ${parseInt(i) + 1} coincidencias`);

      if (array[i].state == true) {
        //Compruebo si esta activo

        if (password == array[i].password) {
          //Comprobamos si los password coinciden
          console.log(`Login exitoso`);

          //Se debe redirigir a la pagina administracion.
          //Redireccionamiento tras 2 segundos
          //   setTimeout(function () {
          //     cleanForm();
          //     window.location.href = "./admin.html";
          //   }, 2000);
        } else {
          console.log("Las contraseñas no coinciden");
        }
      }
    } else {
      console.log("no se encontro ningun usuario activo con ese nombre");
    }
  }
}

//Clean the form
function cleanForm() {
  let form = document.getElementById("loginForm");
  form.reset();
}

//Obtains the current date
function dateToday() {
  let today = new Date();
  let dateToday =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  return dateToday;
}
