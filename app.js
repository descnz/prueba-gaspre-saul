const express = require('express');
require("dotenv").config(); //variables de entorno
const app = express();


const cors = require("cors");
const {conexionDBmysql} = require("./config/mysql");

app.use(cors());
app.use(express.json()); //Para realizar peticiones en formato json
app.use(express.urlencoded({extended: true})) //
// Require the routes directory
const routes = require('./routes');

// Use the routes
app.use('/api', routes); // Assuming you want to prefix your routes with '/api'

// ...other middleware and setup

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
