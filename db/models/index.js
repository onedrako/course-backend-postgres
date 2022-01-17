const { User, UserSchema } = require("./user.model")
const {Customer, CustomerSchema} = require("./customer.model")

const setUpModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
}

module.exports = setUpModels