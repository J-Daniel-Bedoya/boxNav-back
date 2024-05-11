const { FailPorts, Boxes } = require("../models");

class FailPortsServices {
  static async getAll() {
    try {
      const result = await FailPorts.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await FailPorts.findOne({
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
      const result = await FailPorts.create(port);
      box.failPorts += 1;
      await box.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, port) {
    try {
      const result = await FailPorts.update(port, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await FailPorts.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = FailPortsServices;
