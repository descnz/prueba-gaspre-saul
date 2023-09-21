const { sequelize } = require("../config/mysql");
const { QueryTypes } = require("sequelize");

/**
 * @param {} req  http://localhost:5000/api/unidades/...
 * @param {*} res   Query de la operacion
 */

const getEstacionInfoCtrl = async (req, res) => {
  try {
    console.log("test")
    
    
  } catch (e) {
    handleHttpError(res, "ERROR_READ_cONTROLADOR");
  }
};

module.exports = {
  getEstacionInfoCtrl
};
