'use strict';

const { USER_TABLE } = require("./../models/user.model");
const { DataTypes, Sequelize } = require('sequelize');


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW
      }
    })
  },


async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE)
  }
};
