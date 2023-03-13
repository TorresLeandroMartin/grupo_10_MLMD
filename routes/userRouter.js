const express = require("express");
const router = express.Router();

//Controller
const userController = require("../controllers/userController");

//Middlewares
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const validacionesLogin = require('../middlewares/validacionesLogin');
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");


// URL /usuarios/crearcuenta
router.get("/crearcuenta", guestMiddleware, userController.crearCuenta);

// URL /usuarios/crearcuenta/registrar
router.post("/crearcuenta", uploadFile.single("imagen"), validations, userController.procesoRegistro);

// Formulario de login
router.get("/iniciarsesion", guestMiddleware, userController.iniciarSesion);

// Procesar login
router.post("/iniciarsesion", validacionesLogin, userController.iniciarSesionProceso);

// URL /usuarios/perfil
router.get("/perfil/:id", authMiddleware, userController.profile);

// URL /usuarios/cerrarsesion
router.get("/cerrarsesion", authMiddleware, userController.cerrarsesion);

// URL /usuarios/carrito
router.get("/carrito", userController.carrito);

module.exports = router;
