const express = require('express');
const router = express.Router();

const profilCtrl = require('../controllers/profil');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, profilCtrl.createProfil);

//router.get('/', auth, profilCtrl.getAllSauces);
 
router.get('/:id', auth, profilCtrl.getOneProfil);

router.put('/:id', auth, multer, profilCtrl.modifyProfil);

router.delete('/:id', auth, profilCtrl.deleteProfil);

module.exports = router;