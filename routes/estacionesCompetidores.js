const express = require("express");
const router = express.Router();
// const {

// } = require("../validators/unidades");
const {
  getEstacionInfoCtrl
} = require("../controllers/estacionesCompetidores");


router.get("/read", getEstacionInfoCtrl);


module.exports = router;
