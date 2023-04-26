

window.addEventListener("load", function () {
  
// Validación Front de "Imagen"


var img = document.getElementById("imagen");
var errores = false;


// Verificar si el archivo es una imagen



img.addEventListener('change', function () {

  var formatoImg = document.getElementById("formatoImagen");
  let file = this.files[0]


  if (!file.type.startsWith("image/jpeg") && !file.type.startsWith("image/png")) {
 
    img.classList.add("is-invalid"); 
    formatoImg.innerHTML = 'Extensión no permitida. Utiliza: .jpg / .png';
    errores = true

  } else {
    //img.setCustomValidity("");
    img.classList.remove("is-invalid")
    img.classList.add("is-valid")
    formatoImg.innerHTML = "";
    errores = false
  }

// Verificar el tamaño de la imagen

let tamañoImg = document.getElementById("tamañoImagen");
const maxSize = 5 * 1024 * 1024;

if (file.size > maxSize) {

tamañoImg.classList.add("is-invalid");
tamañoImg.innerHTML = 'La imagen seleccionada es demasiado grande. El tamaño máximo permitido es de 5MB.';

} else {
//img.setCustomValidity("");
img.classList.remove("is-invalid")
img.classList.add("is-valid")
tamañoImg.innerHTML = "";
errores = false
}

})

// ¿Hay imagen?

var archivoImg = document.getElementById("archivoImagen");

img.addEventListener('blur', function () {


if (img.value == "") {

  img.classList.add("is-invalid");
  archivoImg.innerHTML = 'Subí una imagen de perfil';

  errores = true

} else {
  imagen.setCustomValidity("");
  img.classList.remove("is-invalid")
  img.classList.add("is-valid")
  archivoImg.innerHTML = "";
  errores = false
}

})

  // Validación Front de "Nombre"


  let nombre = document.querySelector("#nombre");

  nombre.addEventListener("blur", function () {

    if (nombre.value == "") {
      nombre.classList.add("is-invalid")
      document.querySelector(".nombreErrors").innerHTML = "Escribí tu nombre"
      errores = true
    } else {
      nombre.classList.remove("is-invalid")
      nombre.classList.add("is-valid")
      document.querySelector(".nombreErrors").innerHTML = "";

      errores = false
    }

  })


  // Validación Front de "Email"


    var correoElectronico = document.querySelector("#email");

    document.getElementById("icono").style.display = "none"

     /* Validación de email, ¿Está vacío?  */

    correoElectronico.addEventListener("blur", function () {
        if (correoElectronico.value == "") {
            correoElectronico.classList.remove("is-valid")
            correoElectronico.classList.add("is-invalid");

            document.querySelector(".emailErrors #mensaje").innerHTML = "Debes completar el campo con tu email";
            
            document.getElementById("icono").style.display = "block";
            
            errores = true

        } else {
            email.setCustomValidity("");

            correoElectronico.classList.remove("is-invalid")
            correoElectronico.classList.add("is-valid")
            document.getElementById("icono").style.display = "none"
            document.querySelector(".emailErrors #mensaje").innerHTML = "";

            errores = false
        }
  

    /* Validación de email, ¿Es un formato válido?  */


        if (correoElectronico.validity.typeMismatch) {
            correoElectronico.classList.remove("is-valid")
            correoElectronico.classList.add("is-invalid");

            document.querySelector(".emailErrors #mensaje2").innerHTML = "Debes completar el campo email con un formato válido";
            document.getElementById("icono").style.display = "block"
            errores = true

        } else {
            email.setCustomValidity("");

            correoElectronico.classList.remove("is-invalid")
            correoElectronico.classList.add("is-valid")
            document.querySelector(".emailErrors #mensaje2").innerHTML = "";

            errores = false
        }
    })

  // Validación Front de "teléfono"
  var telefono = document.querySelector("#telefono");

  telefono.addEventListener("blur", function () {

    if (telefono.value == "") {
      telefono.classList.add("is-invalid")
      document.querySelector(".telefonoErrors #mensaje").innerHTML = "Escribí tu número de teléfono"
      errores = true
    } else {
      telefono.classList.remove("is-invalid")
      telefono.classList.add("is-valid")
      document.querySelector(".telefonoErrors #mensaje").innerHTML = "";

      errores = false
    }


  /* Validación de teléfono, Corroborra que no se escriban letras  */

  var numeric = /^[0-9]+$/;


  if (telefono.value.match(numeric)) {

    telefono.classList.remove('is-invalid');
    telefono.classList.add('is-valid');
    document.querySelector(".telefonoErrors #numeric").innerHTML = " ";

    errores = true;

  } else {

    telefono.classList.add('is-invalid');
    document.querySelector(".telefonoErrors #numeric").innerHTML = "Escribí números";

    errores = false;
  }

})

// Validación Front de "categoria"


let categoria = document.querySelector("#categoria");
let archivoCategoria = document.getElementById("archivoCategoria");

categoria.addEventListener("change", function () {

  if (categoria.value == "") {
    categoria.classList.add("is-invalid")
    archivoCategoria.innerHTML = "Selecciona una categoría"
    errores = true
  } else {
    categoria.classList.remove("is-invalid")
    categoria.classList.add("is-valid")
    archivoCategoria.innerHTML = "";

    errores = false
  }

})


  // Validación Front de "Contraseña"



  let contraseña = document.querySelector("#contraseña");

  contraseña.addEventListener("blur", function () {

/* Recolectoras de ID para mensajes de validación */

    var minuscula = document.getElementById("minuscula");
    var mayuscula = document.getElementById("mayuscula");
    var numero = document.getElementById("numero");
    var cantidad = document.getElementById("cantidad");

 /* Validación de contraseña, ¿Tiene menos de 8 caracteres?  */

    if (contraseña.value.length <= 8) {

      cantidad.classList.add('is-invalid');
      document.querySelector(".contrasenaError #cantidad").innerHTML = "La contraseña debe contener al menos 8 caracteres";

      errores = true;
    } else {
      cantidad.classList.remove('is-invalid');
      cantidad.classList.add('is-valid');
      document.querySelector(".contrasenaError #cantidad").innerHTML = " ";

      errores = false;
    }

  /* Validación de contraseña, ¿Tiene minúsculas?  */

    var minusculas = /[a-z]/g;

    if (contraseña.value.match(minusculas)) {
      minuscula.classList.add('is-valid');
      document.querySelector(".contrasenaError #minuscula").innerHTML = " ";

      errores = false;
    } else {
      minuscula.classList.add('is-invalid');
      document.querySelector(".contrasenaError #minuscula").innerHTML = "La contraseña debe contener al menos una letra minuscula";

      errores = true;
    }

 /* Validación de contraseña, ¿Tiene mayúsculas?  */


    var mayusculas = /[A-Z]/g;

    if (contraseña.value.match(mayusculas)) {
      mayuscula.classList.add('is-valid');
      document.querySelector(".contrasenaError #mayuscula").innerHTML = " ";

      errores = false;

    } else {
      mayuscula.classList.add('is-invalid');
      document.querySelector(".contrasenaError #mayuscula").innerHTML = "La contraseña debe contener al menos una letra MAYÚSCULA";

      errores = true;
    }

/* Validación de contraseña, ¿Tiene números?  */

    var numeros = /[0-9]/g;

    if (contraseña.value.match(numeros)) {
      numero.classList.add('is-valid');
      document.querySelector(".contrasenaError #numero").innerHTML = " ";

      errores = false;

    } else {
      numero.classList.add('is-invalid');
      document.querySelector(".contrasenaError #numero").innerHTML = "La contraseña debe contener al menos un número";

      errores = true;
    }
  })

})

