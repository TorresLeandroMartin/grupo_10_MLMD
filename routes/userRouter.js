const express = require("express");
const router = express.Router();

<<<<<<< HEAD
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
=======
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
router.put("/edicionUsuario/:id/", uploadFile.single("imagen"), userController.editarUsuario);

// Formulario de login
router.get("/iniciarsesion", guestMiddleware, userController.iniciarSesion);

// Procesar login
router.post("/iniciarsesion", userController.iniciarSesionProceso);

// URL /usuarios/perfil
router.get("/perfil/:id/", authMiddleware, userController.profile);

// URL /usuarios/cerrarsesion
router.get("/cerrarsesion", userController.cerrarsesion);
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2

module.exports = router;
