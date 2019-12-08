const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
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

module.exports = router;
