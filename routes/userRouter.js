const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Middlewares
const upload = require('../middlewares/multerMiddleware');

const validationsRegister = require('../middlewares/validationMiddleware');
const validacionesLogin = require('../middlewares/validacionesLogin');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// URL /usuarios/crearcuenta
router.get("/crearcuenta", guestMiddleware, userController.crearCuenta);
router.post('/crearcuenta', upload.single('profile-picture'), validationsRegister, userController.registrarse)

// URL /usuarios/iniciosesion
router.get("/iniciarsesion", guestMiddleware, userController.iniciarSesion);
router.post("/iniciarsesion", validacionesLogin, userController.loguearse);

//Session
router.get("/profile", authMiddleware, userController.profile)

//Logout
router.get("/logout", authMiddleware, userController.logout)

// URL /usuarios/carrito
router.get("/carrito", userController.carrito);

module.exports = router;
