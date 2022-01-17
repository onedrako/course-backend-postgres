const { Sequelize } = require("sequelize");
const { config } = require("./../config/config") 
const setUpModels = require("./../db/models/index")


const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}` 

const sequilize = new Sequelize(URI, {
  dialect: "postgres", //Que base de datos se ocupa
  logging: console.log,  //Para que la consulta se vea en consola
})

setUpModels(sequilize)

module.exports = sequilize;