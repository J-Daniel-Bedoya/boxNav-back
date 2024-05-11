const { PortsBad, Boxes } = require("../models");

class PortsBadServices {
  static async getAll() {
    try {
      const result = await PortsBad.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await PortsBad.findOne({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(port) {
    try {
      const box = await Boxes.findByPk(port.boxId);
      const result = await PortsBad.create(port);
      box.PortsBad += 1;
      await box.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, port) {
    try {
      const result = await PortsBad.update(port, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await PortsBad.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PortsBadServices;
