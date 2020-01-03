const express = require('express');
const multer  =require('multer');
const Post = require('../models/post');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

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


router.post('',checkAuth,
  multer({storage: storage}).single("image") ,
  (req,res,next)=>{
  const url = req.protocol + "://" + req.get("host");
  const post = new Post({
    title:req.body.title,
    content:req.body.content,
    imagePath: url + "/imgs/" + req.file.filename,
    creator: req.userData.userId
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
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fechedPost;
  if (pageSize && currentPage){
    postQuery
      .skip(pageSize * (currentPage-1))
      .limit(pageSize);
  }
  postQuery
    .then(result=>{
      fechedPost = result;
      return Post.count();
    })
    .then(count => {
      res.status(200).json(
        {
          massage : "Sucessful",
          posts : fechedPost,
          maxPost: count
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

router.delete('/:id',checkAuth,(req,res,next)=> {
  Post.deleteOne({_id:req.params.id, creator: req.userData.userId})
    .then(result=> {
      if (result.n > 0){
        res.status(200).json({massage:"Post Deleted"});
      }else {
        res.status(401).json({message: "not authorized"})
      }

    });
});

router.put(
  '/:id' ,
  checkAuth,
  multer({storage: storage}).single("image"),
  (req,res,next) => {
  let imagePath = req.body.imagePath;
  if (req.file){
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/imgs/" + req.file.filename;
  }
  const post = new Post({
    _id:req.body.id,
    title:req.body.title,
    content:req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  });
  Post.updateOne({_id:req.params.id, creator: req.userData.userId},post)
    .then(result=>{
      if (result.nModified > 0){
        res.status(200).json({message: "Updated"})
      }else {
        res.status(401).json({message: "not authorized"})
      }
    });
});


module.exports = router;
