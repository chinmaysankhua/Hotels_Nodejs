const express = require('express');
const router = express.Router();
const MenuItem = require('./menu');
// const { route } = require('./personRoutes');

router.get('/',async(req,res)=>{
    try{
      const data = await MenuItem.find();
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'})
    }
  })

  router.post('/',async(req,res)=>{

    try{
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('Data Saved Successfully');
      res.status(201).json(response);
    }
    catch(err){
      console.log(err);
      res.status(404).json({error:'Internal Server Error'})
    }
  })

  module.exports = router;