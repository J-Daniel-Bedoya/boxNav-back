const { Address } = require("../models");

class AddressServices {
  static async getAll() {
    try {
      const result = await Address.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await Address.findOne({
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(address) {
    try {
      const result = await Address.create(address);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, address) {
    try {
      const result = await Address.update(address, {
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Address.destroy({ where: id });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AddressServices;
