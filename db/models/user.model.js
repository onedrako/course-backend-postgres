const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  }
} //Define la estructura de la base de datos

class User extends Model{
  static associate(models){
    this.hasOne(models.Customer, {
      as: "customer", 
      foreignKey: "userId"})
  }
  static config(sequelize){
    return{
      sequelize,
      table: USER_TABLE,
      modelName: "user",
      timestamps: false,
    }
  }
}//Model tiene los métodos para las queries

module.exports = { USER_TABLE, UserSchema, User };