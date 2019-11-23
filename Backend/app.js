const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// models
const Post = require('./models/post');

const app = express();
mongoose.connect("mongodb+srv://root:1234@assignment01-53moj.mongodb.net/meat-Social-App?retryWrites=true&w=majority")
  .then(()=>{
    console.log("Connection OK");
  }).catch(()=>{
    console.log("Connection error");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader( "Access-Control-Allow-Headers",
    "Origin, X-Requested-with,Content-Type,Accept"
    );
  res.setHeader("Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );

  next();
});



// Routes
app.post('/api/post',(req,res,next)=>{
  const post = new Post({
    title:req.body.title,
    content:req.body.content
  });
  post.save()
    .then(result=> {
      res.status(201).json({
        massage : "OK",
        postId: result._id
      });
    });
});

app.get('/api/post',(req,res,next)=>{
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

app.delete('/api/post/:id',(req,res,next)=> {
  Post.deleteOne({_id:req.params.id})
    .then(result=> {
      // console.log(result);
      res.status(200).json({massage:"Post Deleted"});
    });
});

app.put( '/api/post/:id' ,(req,res,next) => {
  const post = new Post({
    _id:req.body.id,
    title:req.body.title,
    content:req.body.content
  });
  Post.updateOne({_id:req.params.id},post)
    .then(result=>{
      console.log(result);
      res.status(200).json({message: "Updated"})
    });
});






module.exports = app;
