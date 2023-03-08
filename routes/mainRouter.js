const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


const mainController = require('../controllers/mainController')

// URL /
router.get('/', guestMiddleware, mainController.home);

// URL /homeOficial
router.get('/homeOficial', authMiddleware, mainController.homeLogin);


module.exports = router;