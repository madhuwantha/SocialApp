const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const User = require('../models/user');


exports.userLogin = (req,res,next)=>{
  let user_ = '';
  User.findOne({email: req.body.email})
    .then( user =>{
      if (!user){
        return res.status(401).json({
          message: "Email not Found"
        });
      }
      user_ = user;
      return bcrypt.compare(req.body.password,user.password);
    })
    .then(result=>{
      if (!result){
        return res.status(401).json({
          message: "Password invalid"
        });
      }
      const  token  = jwt.sign(
        {email:user_.email,userId: user_._id},
        process.env.JWT_TOKEN_KEY,
        {expiresIn: "1h"}
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: user_._id
      });
    })
    .catch(err =>{
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
};

exports.createUser = (req,res,next) => {
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
            message: "Invalid authentication credentials!"
          })
        });
    })
    .catch(error => {
      console.log(error);
    });
};
