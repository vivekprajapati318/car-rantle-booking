const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {body,validationResult} = require('express-validator');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const jwtSecret = "jlgrldhgrldhlknlkhljhlkjhkljlk"
router.post("/createuser",[ 
  body('email',"incoorect email").isEmail(),
  body('pwd',"incoorect password").isLength({min:6})]
  ,async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }
    const salt=await bcrypt.genSalt(10);
    const secpassword=await bcrypt.hash(req.body.pwd,salt)
  try {
    
    const newUser = await User.create({
      name: req.body.name,
      pwd: secpassword,
      email: req.body.email,
      location: req.body.location
    });
    res.json({ success: true, user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});
router.post("/loginuser",  body('email',"incoorect email").isEmail(),
body('pwd',"incoorect password").isLength({min:6}),async (req, res) => {
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
let email=req.body.email;
  try {
  let userdata= await User.findOne({email})
  if(!userdata){
    res.status(400).json({ error: "try again"})
  }
  const pwdcompare = await bcrypt.compare(req.body.pwd,userdata.pwd)
  if (!pwdcompare) {
    res.status(400).json({ success: false, error:" invalid password" })
  } 
  const data={
    user:{
      id:userdata.id
    }
  }
  const authtoken=jwt.sign(data,jwtSecret)
   return res.json({ success: true, authtoken:authtoken})
  
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ success: false, error: error.message });
  }

  });

module.exports = router;
