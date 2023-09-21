const express = require("express");
const router = express.Router();
// const {

// } = require("../validators/unidades");
const {
  getEstacionInfoCtrl
} = require("../controllers/estacionesCompetidores");

//http://localhost:3306/api/estacionesCompetidores/read
router.get("/read/:id", getEstacionInfoCtrl);


module.exports = router;
