const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const postController = require('../controller/post');
const file = require('../middleware/file');



router.post('',checkAuth,file ,postController.createPost );

router.get('',postController.getPost);

router.get( '/:id' , postController.getApost);

router.delete('/:id',checkAuth,postController.deleteApost);

router.put( '/:id' , checkAuth,file,postController.updateApost);


module.exports = router;
