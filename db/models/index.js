const { User, UserSchema } = require("./user.model")

const setUpModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setUpModels