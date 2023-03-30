const express = require('express');
const router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6

const mainController = require('../controllers/mainController')

// URL /
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/', guestMiddleware, mainController.home);

// URL /homeOficial
router.get('/homeOficial', authMiddleware, mainController.homeLogin);

=======
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6
router.get('/', mainController.home);

// URL /homeOficial
router.get('/homeOficial', mainController.homeLogin);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> a36b9d1bd71a1c4c2e2ecb02717386b828119aa2
=======
>>>>>>> sprint6

module.exports = router;