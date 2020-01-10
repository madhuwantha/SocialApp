const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



// Routes
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');



const app = express();
mongoose.connect(process.env.DB_URL)
  .then(()=>{
    console.log("Connection OK");
  }).catch(()=>{
    console.log("Connection error");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/imgs",express.static(path.join(__dirname ,"imgs")));
app.use("/",express.static(path.join(__dirname,"/angular")));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader( "Access-Control-Allow-Headers",
    "Origin, X-Requested-with,Content-Type,Accept , Authorization"
    );
  res.setHeader("Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );

  next();
});


app.use('/api/post',postRoutes);
app.use('/api/user',userRoutes);
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,"angular","index.html"));
});

module.exports = app;
