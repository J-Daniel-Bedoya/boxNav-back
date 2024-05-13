const { Sectors, Boxes } = require("../models");

class SectorsServices {
  static async getAll() {
    try {
      const result = await Sectors.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await Sectors.findOne({
        where: { id },
        // include: {
        //   model: Boxes,
        //   as: "boxes",
        //   // attributes: ["id"],
        // },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(sector) {
    try {
      const result = await Sectors.create(sector);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, sector) {
    try {
      const result = await Sectors.update(sector, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Sectors.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SectorsServices;