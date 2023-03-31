const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

// URL /
router.get('/', mainController.home);

// URL /homeOficial
router.get('/homeOficial', mainController.homeLogin);

module.exports = router;