const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

// const path = require('path'); 

router.get('/', mainController.home);

router.get('/descriptionPage', mainController.descriptionPage);

router.get('/cart', mainController.cart);

router.get('/edicion', mainController.edicion);

router.get('/nuevoProducto', mainController.nuevoProducto);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/catalogo', mainController.catalogo);



module.exports = router;