const express = require('express')
const router  = express.Router()
const {check, validationResult} = require("express-validator")
const {Restaurant} = require("../models/index")
// const {sequelize} = require("../db");



router.get("/", async(request, response) =>{
    try {
        const restaurants = await Restaurant.findAll(); // Retrieve all restaurants from the database
        response.json(restaurants); // Send the restaurants as a JSON response
      } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
      }
})

router.get('/:id', async(req, res) => {
  keyForRes = req.params.id
  objFound = await Restaurant.findByPk(keyForRes)
  res.json(objFound)

})



router.post('/',[check(["name", "location", "cuisine"]).not().isEmpty().trim()],  async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    } 
    else{
        objToCreate = req.body
        await Restaurant.create(objToCreate)
        res.json(await Restaurant.findAll())
    }
})

router.put('/:id', async(req, res) => {
  objKeyToReplace = parseInt(req.params.id)

  objFound = await Restaurant.findByPk(objKeyToReplace)
  // objFound.name = req.body.name
  // this method of updating can be used to update one or all parameters through the body in post
  objFound.update({
    name: req.body.name,
    location: req.body.location,
    cuisine: req.body.cuisine
  })
  // objFound.cuisine = req.body.cuisine
  // For future cases add await model.save to save to database!
  // await objFound.save
  res.json(await Restaurant.findByPk(objKeyToReplace))

})

router.delete('/:id', async(req, res) => {
  objKeyToDelete = parseInt(req.params.id)
  objFound = await Restaurant.findByPk(objKeyToDelete)
  await objFound.destroy()
  res.json(await Restaurant.findAll())
})

module.exports = router