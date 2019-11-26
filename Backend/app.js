const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Routes
const postRoutes = require('./routes/posts');



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


app.use('/api/post',postRoutes);

module.exports = app;
