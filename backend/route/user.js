const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/signup', userCtrl.signup);//Créer un user
router.post('/login', userCtrl.login);//Log in
// router.get('/logout', userCtrl.logout);//Log out

router.get('/:id', auth, userCtrl.getOneUser);// Trouver un user

router.get('/', auth, userCtrl.getAllUser);// Trouver tous les users

router.put('/:id', auth, multer, userCtrl.modifyUser);// Modifier un user

router.delete('/:id', auth, userCtrl.deleteUser);// Supprimer un user

module.exports = router;