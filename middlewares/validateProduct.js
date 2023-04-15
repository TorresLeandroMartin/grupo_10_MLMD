const path = require("path");
const {body} = require("express-validator");


const validateProduct = [
    body("estilo").isLength({ min: 3, max: 30 }).withMessage("Tenés que elgir el estilo del producto"),
    body("nombre").isLength({ min: 3, max: 30 }).withMessage("Tenés que escribir nombre del producto"),
    body("precio").isInt().withMessage("Ponele precio a tu producto"),
    body("talle").notEmpty().withMessage("Elige un talle"),
    body("categoria").notEmpty().withMessage("Tenés que elegir una categoría"),
    body("descripcion").notEmpty().withMessage("Agregá una descripción"),
    body("imagenDelProducto").custom((value, { req }) => {
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

module.exports = validateProduct;