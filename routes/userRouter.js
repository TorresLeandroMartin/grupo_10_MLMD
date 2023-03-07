const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Middlewares
const upload = require('../middlewares/multerMiddleware');

// URL /usuarios/iniciosesion
router.get("/iniciarsesion", userController.iniciarSesion);

// URL /usuarios/crearcuenta
router.get("/crearcuenta", userController.crearCuenta);
router.post('/crearcuenta', upload.single('profile-picture'),userController.registrarse)

// URL /usuarios/carrito
router.get("/carrito", userController.carrito);

module.exports = router;
