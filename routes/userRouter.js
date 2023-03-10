const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
let logDBMiddleware = require("../middlewares/logDBMiddleware")
// URL /usuarios/iniciosesion
router.get("/iniciarsesion", userController.iniciarSesion);

// URL /usuarios/crearcuenta
router.get("/crearcuenta", userController.registrarse);

router.post("/crearusuario", userController.crearUsuario);

// URL /usuarios/carrito
router.get("/carrito", userController.carrito);


module.exports = router;
