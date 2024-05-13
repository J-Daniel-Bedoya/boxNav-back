const { Users, Town, Sectors, Boxes } = require("../models");

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
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(user) {
    try {
      const town = await Town.findByPk(user.townId);
      const sector = await Sectors.findByPk(user.sectorId);
      const box = await Boxes.findByPk(user.boxId);
      const result = await Users.create(user);
      town.usersNumber += 1;
      sector.usersNumber += 1;
      box.portUsed += 1;
      await town.save();
      await sector.save();
      await box.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, user) {
    try {
      const result = await Users.update(user, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
