const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// router.post('/:id/like', auth, multer, saucesCtrl.likeSauces);
 
router.post('/', auth, multer, postCtrl.createPost);// Créer un message

router.get('/:uuid', auth, postCtrl.getOnePost);// Trouver un message

router.get('/', auth, postCtrl.getAllPost);// Trouver tous les messages

router.put('/:uuid', auth, multer, postCtrl.modifyPost);// Modifier un message

router.delete('/:uuid', auth, postCtrl.deletePost);// Supprimer un message

module.exports = router;