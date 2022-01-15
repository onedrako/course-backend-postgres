const pool = require('../libs/postgres.pool');
const boom = require('@hapi/boom');

const { models } = require("../libs/sequelize");

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) => console.error(err));
    this.models = models;
  }

  async create(data) {
    console.log(data)
    const newUser = await models.user.create(data);
    return newUser;
  }

  async find() {
    const response = await models.user.findAll();
    return response
  }

  async findOne(id) {
    const user = await models.user.findByPk(id);
    if(!user){
      throw boom.notFound("User not found");
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = user.update(changes);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
