const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
router.post('/carsData',(req,res)=>{
    try {
        res.send([global.cars,cars_catagory])
    console.log(global.cars)
    } catch (error) {
     console.error("server error")   
    }
})
module.exports=router;
