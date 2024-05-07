const { Users, Town } = require("../models");

class UsersServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await Users.findOne({
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(user) {
    try {
      const town = await Town.findByPk(user.townId);
      const result = await Users.create(user);
      town.userNumber += 1;
      await town.save();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, user) {
    try {
      const result = await Users.update(user, {
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Users.destroy({ where: id });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
