const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// router.post('/:id/like', auth, multer, saucesCtrl.likeSauces);
 
router.post('/', auth, multer, postCtrl.createPost);// Créer un message

router.get('/:id', auth, postCtrl.findOnePost);// Trouver un message

router.get('/', auth, postCtrl.findAllPost);// Trouver tous les messages

router.put('/:id', auth, multer, postCtrl.modifyPost);// Modifier un message

router.delete('/:id', auth, postCtrl.deleteOnePost);// Supprimer un message

module.exports = router;