const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordControl = require('../middleware/password');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/signup', passwordControl, userCtrl.signup);//Créer un user
router.post('/login', userCtrl.login);//Login

router.get('/:id', auth, userCtrl.findOneUser);// Trouver un user

router.get('/', auth, userCtrl.findAllUser);// Trouver tous les users

router.put('/:id', auth, multer, userCtrl.modifyUser);// Modifier un user

router.delete('/:id', auth, userCtrl.deleteOneUser);// Supprimer un user

module.exports = router;