const { check } = require("express-validator");

const validacionesLogin = [
    check('email').isEmail().withMessage('Debes ingresar un mail válido'),
    check('contrasena').isLength({min:8}).withMessage('la contraseña debe tener minimo 8 caracteres')
]

module.exports = validacionesLogin;