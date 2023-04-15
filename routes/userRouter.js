const express = require("express");
const router = express.Router();

//Controller
const userController = require("../controllers/userController");

//Middlewares
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");


// URL /usuarios/crearcuenta
router.get("/crearcuenta", guestMiddleware, userController.crearCuenta);

// URL /usuarios/crearcuenta/registrar
router.post("/crearcuenta", uploadFile.single("imagen"), validations, userController.procesoRegistro);

// URL /usuarios/edicion/:id
router.get("/edicionUsuario/:id/", userController.edicion);

// URL /usuarios/edicion/:id
router.put("/edicionUsuario/:id/", uploadFile.single("imagen"), validations, userController.editarUsuario);

// Formulario de login
router.get("/iniciarsesion", guestMiddleware, userController.iniciarSesion);

// Procesar login
router.post("/iniciarsesion", userController.iniciarSesionProceso);

// URL /usuarios/perfil
router.get("/perfil/:id/", authMiddleware, userController.profile);

// URL /usuarios/cerrarsesion
router.get("/cerrarsesion", userController.cerrarsesion);

module.exports = router;
