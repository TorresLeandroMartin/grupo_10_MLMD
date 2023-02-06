const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// URL /usuarios/iniciosesion
router.get("/iniciarsesion", userController.iniciarSesion);

// URL /usuarios/crearcuenta
router.get("/crearcuenta", userController.crearCuenta);

// URL /usuarios/carrito
router.get("/carrito", userController.carrito);

module.exports = router;
