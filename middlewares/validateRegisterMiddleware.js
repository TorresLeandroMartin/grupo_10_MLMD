const path = require("path");
const {body} = require("express-validator");


const validations = [
    body("nombre").isLength({ min: 5, max: 30 }).withMessage("Tenés que escribir tu nombre y apellido"),
    body("email").notEmpty().withMessage("Tenés que escribir tu correo electrónico").bail()
        .isEmail().withMessage("Escribi un formato válido de correo electrónico"),
    body("telefono").isInt().withMessage("Tenés que escribir tu teléfono"),
    body("categoria").notEmpty().withMessage("Tenés que elegir una categoría"),
    body("contrasena").isLength({ min: 8 }).withMessage("Escribi tu contraseña"),
    body("imagen").custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error("Tenés que subir una imagen");
        } else {
            let extensionDeArchivo = path.extname(file.originalname);
            if (!extensionesPermitidas.includes(extensionDeArchivo)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensionesPermitidas.join(', ')}`);
            }
        }

        return true;
    }),
]

module.exports = validations;