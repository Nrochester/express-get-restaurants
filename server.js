const express = require("express");
const app = express();
// const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");
const restaurantRouter = require("./routes/restaurants")
const port = 3000;

//TODO: Create your GET Request Route Below: 
// app.get("/restaurants", async(request, response) =>{
//     try {
//         const restaurants = await Restaurant.findAll(); // Retrieve all restaurants from the database
//         response.json(restaurants); // Send the restaurants as a JSON response
//       } catch (error) {
//         console.error(error);
//         response.status(500).send('Internal Server Error');
//       }
// })

// app.get('/restaurants/:id', async(req, res) => {
//   keyForRes = req.params.id
//   objFound = await Restaurant.findByPk(keyForRes)
//   res.json(objFound)

// })



// app.post('/restaurants', async(req, res) => {
//   objToCreate = req.body
//   await Restaurant.create(objToCreate)
//   res.json(await Restaurant.findAll())
// })

// app.put('/restaurants/:id', async(req, res) => {
//   objKeyToReplace = parseInt(req.params.id)

//   objFound = await Restaurant.findByPk(objKeyToReplace)
//   // objFound.name = req.body.name
//   // this method of updating can be used to update one or all parameters through the body in post
//   objFound.update({
//     name: req.body.name,
//     location: req.body.location,
//     cuisine: req.body.cuisine
//   })
//   // objFound.cuisine = req.body.cuisine
//   // For future cases add await model.save to save to database!
//   // await objFound.save
//   res.json(await Restaurant.findByPk(objKeyToReplace))

// })

// app.delete('/restaurants/:id', async(req, res) => {
//   objKeyToDelete = parseInt(req.params.id)
//   objFound = await Restaurant.findByPk(objKeyToDelete)
//   await objFound.destroy()
//   res.json(await Restaurant.findAll())
// })

app.use(express.json())
app.use(express.urlencoded())
app.use('/restaurants', restaurantRouter)

app.listen(port, () => {
    sequelize.sync();
    console.log(`Your server is listening on port http://localhost:${port}/restaurants/1`);
})