window.addEventListener("load", () => {

    let formulario = document.querySelector("#crearProducto");

    /*///////////////////////VALIDACIONES ///////////////////////////*/

    let errores = true;

    let fileInput = document.getElementById("file");
    let fileError = document.getElementById("file-error");

    fileInput.addEventListener("change", function() {
        let file = this.files[0];
        let fileType = file.type;

        if (!fileType.match(/image/(jpeg|png)/)) {
        fileError.textContent = "Error: La extension del archivo es invalido. Por favor, seleccionar un archivo con extension JPEG o PNG.";
        fileInput.value = "";
        } else {
        fileError.textContent = "";
        }
    });

    let estiloProducto = document.querySelector("#estilo");

    estiloProducto.addEventListener("blur", function() {
        if (estiloProducto.value.length < 4){

            estiloProducto.classList.add("is-invalid");

            document.querySelector(".estiloErrors").innerHTML = "El estilo del producto debe tener al menos 4 caracteres";

            errores = true
        
        } else {
            estiloProducto.classList.remove("is-invalid")
            estiloProducto.classList.add("is-valid")
            document.querySelector(".estiloErrors").innerHTML = "";

            errores = false
        }
    });

    let nombreProducto = document.querySelector("#nombre");

    nombreProducto.addEventListener("blur", function() {
        if (nombreProducto.value.length < 4){

            nombreProducto.classList.add("is-invalid");

            document.querySelector(".nombreErrors").innerHTML = "El nombre del producto debe tener al menos 4 caracteres";

            errores = true
        
        } else {
            nombreProducto.classList.remove("is-invalid")
            nombreProducto.classList.add("is-valid")
            document.querySelector(".nombreErrors").innerHTML = "";

            errores = false
        }
    });

    let precio = document.querySelector("#precio");

    precio.addEventListener("blur", function() {

        var numeros = /[0-9]/g;

        if (precio.value.match(numeros) && precio.value > 0 && precio.value != " ") {
            precio.classList.remove('is-invalid');
            precio.classList.add('is-valid');
            document.querySelector(".precioError").innerHTML = " ";
            
            errores = false;

        } else {
            precio.classList.add('is-invalid'); 
            document.querySelector(".precioError").innerHTML = "El precio debe ser mayor a 0";
            
            errores = true;
        }
    });

    let categoriaProducto = document.querySelector("#categoria");

    categoriaProducto.addEventListener("blur", function() {
        if (categoriaProducto.value == ""){

            categoriaProducto.classList.add("is-invalid");

            document.querySelector("#categoriaErrors").innerHTML = "Debes escoger un categoria";

            errores = true
        
        } else {
            categoriaProducto.classList.remove("is-invalid")
            categoriaProducto.classList.add("is-valid")
            document.querySelector("#categoriaErrors").innerHTML = "";

            errores = false
        }
    });

    let talleProducto = document.querySelector("#talle");

    talleProducto.addEventListener("blur", function() {
        if (talleProducto.value == ""){

            talleProducto.classList.add("is-invalid");

            document.querySelector("#talleErrors").innerHTML = "Debes escoger un talle";

            errores = true
        
        } else {
            talleProducto.classList.remove("is-invalid")
            talleProducto.classList.add("is-valid")
            document.querySelector("#talleErrors").innerHTML = "";

            errores = false
        }
    });

    let colorProducto = document.querySelector("#color");

    colorProducto.addEventListener("blur", function() {
        if (colorProducto.value == ""){

            colorProducto.classList.add("is-invalid");

            document.querySelector("#colorErrors").innerHTML = "Debes escoger un color";

            errores = true
        
        } else {
            colorProducto.classList.remove("is-invalid")
            colorProducto.classList.add("is-valid")
            document.querySelector("#colorErrors").innerHTML = "";

            errores = false
        }
    }); 

    let descripcionProducto = document.querySelector("#descripcion");

    descripcionProducto.addEventListener("blur", function() {
        if (descripcionProducto.value == ""){

            descripcionProducto.classList.add("is-invalid");

            document.querySelector("#descripcionErrors").innerHTML = "La descripcion debe tener mas de 4 caracteres y menos de 120";

            errores = true
        
        } else {;
            descripcionProducto.classList.remove("is-invalid")
            descripcionProducto.classList.add("is-valid")
            document.querySelector("#descripcionErrors").innerHTML = "";

            errores = false
        }
    });

    formulario.addEventListener("submit", function(e) {
        if(errores){
            e.preventDefault()
        }
    });

});