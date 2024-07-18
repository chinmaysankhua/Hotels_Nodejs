const express = require('express');
const router = express.Router();
const Person = require('./person');

router.get('/',async (req,res)=>{
    try{
      const data = await Person.find();
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal Server Error'})
    }
  })

router.post('/',async(req,res)=>{
    try{
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response)
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
    }     
  })

  router.get('//:workType',async(res,req)=>{

    try {
      const workType = req.params.workType;

      if(workType == 'chef' || workType =='manager'|| workType == 'waiter'){
      const response = await Person.find({work: workType})
      console.log('Response fetched');
      res.status(200).json(response);

      }else{
        res.status(404).json({error:'Invalid work Type'})
      }
    } 
    catch(err) {
      console.log(err);


      res.status(404).json({error:'Internal Server Error'})
    }
})
router.put('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        const update = req.body;
        const response = await Person.findByIdAndUpdate(personId,update,{
            new :true,
            runValidators:true,
        })

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated')
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Server Error'})
    }
})

router.delete('/:id',async(req,res)=>{

  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    
    if(!response){
       return res.status(404).json({error:'Person not found'});
    }
    console.log('data deleted')
    res.status(200).json({error:'Person deleted Successfully'});

  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal Server Error'})
  }
})

module.exports = router;