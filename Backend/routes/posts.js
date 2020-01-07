const express = require('express');
const router = express.Router();
const multer  =require('multer');
const checkAuth = require('../middleware/check-auth');
const postController = require('../controller/post');

const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error  = new Error("Invalid mime Type");
    if (isValid){
      error = null;
    }
    cb(error, "Backend/imgs");
  },
  filename: (req,file,cb) => {
    const name = file.originalname.toLowerCase()
      .split(' ').join('-');
    const ext = MIME_TYPE[file.mimetype];
    cb(null,name+'-'+Date.now()+'.'+ext );
  }
});


router.post('',checkAuth, multer({storage: storage}).single("image") ,postController.createPost );

router.get('',postController.getPost);

router.get( '/:id' , postController.getApost);

router.delete('/:id',checkAuth,postController.deleteApost);

router.put( '/:id' , checkAuth, multer({storage: storage}).single("image"),postController.updateApost);


module.exports = router;
