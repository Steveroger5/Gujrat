const express = require('express')
const router = express.Router()
const Consultants = require('../models/Consultants_gag')

router.get("/:category", async function(req,res){
    console.log(req.params.category);
    try {
        const consultants = await Consultants.find({ category: req.params.category })
        res.send(consultants)
    } catch (error) {
        console.log(error);
        res.status(500).send('server error')
    }
})

router.post('/',function(req,res){
    console.log(req.body);
  const name = req.body.name
  const phone = req.body.phone
  const email = req.body.email
  const location = req.body.location
  const qualification = req.body.qualification
  const fees = req.body.fees
  const category = req.body.category


  let newconsult = new Consultants({
    name,
    phone,
    email,
    location,
    qualification,
    fees,
    category
  })

  newconsult.save()
  res.send("Data saved successfully...")
})
module.exports = router