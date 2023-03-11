const path = require("path");

const { check} = require("express-validator");

const validationMiddleware = [
  check("firstname").isLength({ min: 5, max: 30 }).withMessage("Tenés que escribir tu nombre"),
  check("lastname").isLength({ min: 5, max: 30 }).withMessage("Tenés que escribir tu apellido"),
  check("phone").isInt().withMessage("Tenés que escribir tu teléfono"),
  check("email").notEmpty().withMessage("Tenés que escribir tu correo electrónico").bail()
  .isEmail().withMessage("Escribi un formato válido de correo electrónico"),
  check("password").isLength({ min: 8 }).withMessage("Escribi tu contraseña"),
  check("file").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      // en esta linea puede ser originalname o filename
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Extension de archivo invalida.`);
      }
    }
    return true;
  }),
];

module.exports = validationMiddleware;