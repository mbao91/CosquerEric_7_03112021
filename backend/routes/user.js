const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordControl = require('../middleware/password');


router.post('/signup', passwordControl, userCtrl.signup);
router.post('/login', userCtrl.login);
//router.post('/disconnect', userCtrl.logout);

module.exports = router;