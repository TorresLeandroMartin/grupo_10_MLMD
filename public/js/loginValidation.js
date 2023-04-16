
window.addEventListener("load", () => {
    let formulario = document.querySelector("form.bottom-main")

    /*///////////////////////VALIDACIONES ///////////////////////////*/

    let errores = true;

    let correoElectronico = document.querySelector("#email");

    document.getElementById("icono").style.display = "none"

    correoElectronico.addEventListener("blur", function() {
        if (correoElectronico.value == "" || correoElectronico.validity.typeMismatch){
            correoElectronico.classList.remove("is-valid")
            correoElectronico.classList.add("is-invalid");

            document.querySelector(".emailErrors #mensaje").innerHTML = "Debes completar el campo email con un formato válido";
            document.getElementById("icono").style.display = "block"
            errores = true
        
            } else {
            email.setCustomValidity("");
    
            correoElectronico.classList.remove("is-invalid")
            correoElectronico.classList.add("is-valid")
            document.getElementById("icono").style.display = "none"
            document.querySelector(".emailErrors #mensaje").innerHTML = "";

            errores = false
        }
    })

    

    let contraseña = document.querySelector("#contraseña");


    contraseña.addEventListener("blur", function() {

        var minuscula = document.getElementById("minuscula");
        var mayuscula = document.getElementById("mayuscula");
        var numero = document.getElementById("numero")
        var cantidad = document.getElementById("cantidad");
    

        if (contraseña.value.length <= 8 ) {
            cantidad.classList.add('is-invalid'); 
            
            document.querySelector(".mensajeError #cantidad").innerHTML = "La contraseña debe contener al menos 8 caracteres";
            
            errores = true;
        } else {
            cantidad.classList.remove('is-invalid');
            cantidad.classList.add('is-valid');

            document.querySelector(".mensajeError #cantidad").innerHTML = " ";
            
            errores = false;
        }

        var minusculas = /[a-z]/g;

        if (contraseña.value.match(minusculas) ) {
            minuscula.classList.add('is-valid');
            document.querySelector(".mensajeError #minuscula").innerHTML = " ";
            
            
            errores = false;
        } else {
            minuscula.classList.add('is-invalid'); 
            document.querySelector(".mensajeError #minuscula").innerHTML = "La contraseña debe contener al menos una letra minuscula";
            
            errores = true;
        }
        
        var mayusculas = /[A-Z]/g;

        if (contraseña.value.match(mayusculas) ) {
            mayuscula.classList.add('is-valid');
            document.querySelector(".mensajeError #mayuscula").innerHTML = " ";
            
            
            errores = false;

        } else {
            mayuscula.classList.add('is-invalid'); 
            document.querySelector(".mensajeError #mayuscula").innerHTML = "La contraseña debe contener al menos una letra MAYÚSCULA";
            
            errores = true;
        }
        var numeros = /[0-9]/g;

        if (contraseña.value.match(numeros) ) {
            numero.classList.add('is-valid');
           
            document.querySelector(".mensajeError #numero").innerHTML = " ";
            
            errores = false;

        } else {
            numero.classList.add('is-invalid'); 
           
            document.querySelector(".mensajeError #numero").innerHTML = "La contraseña debe contener al menos un número";
            
            errores = true;
        }
    });
    
    formulario.addEventListener("submit", function(e) {
        if(errores){
            e.preventDefault()
        }
    });

})