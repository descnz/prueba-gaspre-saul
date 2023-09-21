const Sequelize=require ("sequelize");

const database= process.env.mysql_DB;
const username= process.env.mysql_USERNAME;
const password= process.env.mysql_PASSWORD;
const host= process.env.mysql_HOST;

// const database= "prueba";
// const username= "candidatoPrueba";
// const password= "gaspre21.M";
// const host= "precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com";


//console.log(database, username, password, host)

//instanciamos la clase que guarda los datos de conexion con la bd
const sequelize= new Sequelize (
    database,
    username,
    password,
    {
        host, 
        dialect: "mysql"
    }
)

sequelize.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database');
  });

module.exports= {
     sequelize };