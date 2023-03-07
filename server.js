const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: 
/* PART 1
app.get("/restaurants", async (request, response) => {
  response.json(await Restaurant.findAll());
});
*/

/* PART 2 */
app.get("/restaurants/:id", async (request, response) => {
  const rest = request.params.id ;
  response.json(await Restaurant.findByPk(rest));
});

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})