const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Middlewares
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validationMiddleware');
const validacionesUsuarios = require('../middlewares/validacionesLogin');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// URL /usuarios/crearcuenta
router.get("/crearcuenta", guestMiddleware, userController.crearCuenta);
router.post('/crearcuenta', upload.single('profile-picture'), validations, userController.registrarse)

// URL /usuarios/iniciosesion
router.get("/iniciarsesion", guestMiddleware, userController.iniciarSesion);
router.post("/iniciarsesion", validacionesUsuarios, userController.loguearse);

//Session
router.get("/profile", authMiddleware, userController.profile)

//Logout
router.get("/logout", authMiddleware, userController.logout)

// URL /usuarios/carrito
router.get("/carrito", userController.carrito);

module.exports = router;
