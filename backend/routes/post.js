const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', multer, postsCtrl.createPost);

router.post('/:id/like', multer, postsCtrl.likePosts);

router.get('/', auth, postsCtrl.getAllPosts);
 
router.get('/:id', postsCtrl.getOnePost);

router.put('/:id', multer, postsCtrl.modifyPost);

router.delete('/:id', postsCtrl.deletePost);

module.exports = router;