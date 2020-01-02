const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const User = require('../models/user');

router.post("/signup" , (req,res,next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(result =>{
          res.status(200).json({
            massaage: "user resisted",
            resule: result
          });
        })
        .catch(err => {
          res.status(500).json({
            result: err
          })
        });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/login", (req,res,next)=>{
  let user_ = '';
  User.findOne({email: req.body.email})
    .then( user =>{
      if (!user){
       return res.status(401).json({
         massage: "Email not Found"
       });
      }
      user_ = user;
      return bcrypt.compare(req.body.password,user.password);
    })
    .then(result=>{
      if (!result){
        return res.status(401).json({
          massage: "Password invalid"
        });
      }
      const  token  = jwt.sign(
        {email:user_.email,userId: user_._id},
        "dssuyvuUYFuvhjcbuybjkbuyfyccudenuiguyGUYVbhjcbdcyjvu",
        {expiresIn: "1h"}
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600
      });
    })
    .catch(err =>{
      return res.status(401).json({
        massage: "Auth Filed"
      });
    });
});

module.exports = router;
