const boom = require('@hapi/boom');
const { Op } = require('sequelize')
const {models} = require('../libs/sequelize');

class ProductsService {

  constructor(){
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ["category"],
      where: {}
    }
    
    const {limit, offset} = query;
    if(limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    
    const {price} = query;
    if(price){
      options.where.price = price
    }

    const {price_min, price_max} = query;
    if(price_min && price_max){
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      }
    }
    
    
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {

  }

  async update(id, changes) {
    const user = await models.Product.findByPk(id);
    const response = user.update(changes);
    return response;
  }
  

  async delete(id) {

  }

}

module.exports = ProductsService;
