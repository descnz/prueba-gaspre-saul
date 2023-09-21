const { sequelize } = require("../config/mysql");
const { QueryTypes } = require("sequelize");

const getEstacionInfoCtrl = async (req, res) => {
  try {
    console.log("test");

    const id = parseInt(req.params.id);
    console.log(`El id es ${id}`);


      let query = "SELECT stations.name FROM stations where cre_id=:id ";

      const dataUnidadModified = await sequelize.query(query, {
        replacements: { id: `${id}` },
        type: QueryTypes.SELECT,
      });
      console.log(dataUnidadModified)
      res.status(200).json({ data: dataUnidadModified });
    
  } catch (e) {
    res.status(500).json({ error: "ERROR_READ_CONTROLADOR" });
  }
};

module.exports = {
  getEstacionInfoCtrl
};
