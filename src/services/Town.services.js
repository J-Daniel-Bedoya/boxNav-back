const { Town, Boxes } = require("../models");

class TownServices {
  static async getAll() {
    try {
      const result = await Town.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await Town.findOne({
        where: id,
        include: {
          model: Boxes,
          as: "boxes",
          attributes: ["id"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(town) {
    try {
      const result = await Town.create(town);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, town) {
    try {
      const result = await Town.update(town, {
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Town.destroy({ where: id });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TownServices;
