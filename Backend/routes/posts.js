const express = require('express');
const multer  =require('multer');
const Post = require('../models/post');
const router = express.Router();

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


router.post('',multer({storage: storage}).single("image") ,(req,res,next)=>{
  console.log(req.body);
  const url = req.protocol + "://" + req.get("host");
  const post = new Post({
    title:req.body.title,
    content:req.body.content,
    imagePath: url + "/imgs/" + req.file.filename
  });
  post.save()
    .then(result=> {
      res.status(201).json({
        massage : "OK",
        post: {
          ...result,
          id: result._id
        }
      });
    });
});

router.get('',(req,res,next)=>{
  Post.find()
    .then(result=>{
      res.status(200).json(
        {
          massage : "Sucessful",
          posts : result
        }
      )
    });
});
router.get( '/:id' ,(req,res,next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post){
        res.status(200).json(post);
      }else {
        res.status(404).json({massage : "post not found"});
      }
    });
});

router.delete('/:id',(req,res,next)=> {
  Post.deleteOne({_id:req.params.id})
    .then(result=> {
      // console.log(result);
      res.status(200).json({massage:"Post Deleted"});
    });
});

router.put( '/:id' ,multer({storage: storage}).single("image"),(req,res,next) => {
  let imagePath = req.body.imagePath;
  if (req.file){
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/imgs/" + req.file.filename;
  }
  const post = new Post({
    _id:req.body.id,
    title:req.body.title,
    content:req.body.content,
    imagePath: imagePath
  });
  Post.updateOne({_id:req.params.id},post)
    .then(result=>{
      // console.log(result);
      res.status(200).json({message: "Updated"})
    });
});


module.exports = router;
