const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Middlewares
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validationMiddleware');
const validacionesUsuarios = require('../middlewares/validacionesLogin');


// URL /usuarios/iniciosesion
router.get("/iniciarsesion", userController.iniciarSesion);

router.post("/iniciarsesion", validacionesUsuarios, userController.loguearse);

// URL /usuarios/crearcuenta
router.get("/crearcuenta", userController.crearCuenta);
router.post('/crearcuenta', upload.single('profile-picture'), validations, userController.registrarse)

// URL /usuarios/carrito
router.get("/carrito", userController.carrito);

module.exports = router;
