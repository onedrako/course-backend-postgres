const { Sequelize } = require("sequelize");
const { config } = require("./../config/config") 
const setUpModels = require("./../db/models/index")

const options = {
  dialect: "postgres", //Que base de datos se ocupa
  logging: config.isProd ? false : true,  //Para que la consulta se vea en consola
}

if(config.isProd){
  options.dialectOptions ={
    ssl : {
      rejectUnauthorized: false
    }
  }
}

const sequilize = new Sequelize(config.dbUrl, options)

setUpModels(sequilize)

module.exports = sequilize;