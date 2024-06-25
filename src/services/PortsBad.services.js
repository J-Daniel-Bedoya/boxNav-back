const { PortsBad, Boxes } = require("../models");

class PortsBadServices {
  static async getAll() {
    try {
      return await PortsBad.findAll();
    } catch (error) {
      throw new Error("Error al obtener los puertos problemáticos");
    }
  }

  static async get(id) {
    try {
      return await PortsBad.findOne({ where: { id } });
    } catch (error) {
      throw new Error("Error al obtener el puerto problemático");
    }
  }

  static async create(port) {
    try {
      const box = await Boxes.findByPk(port.boxId);
      const result = await PortsBad.create(port);

      box.portsBad += 1;
      await box.save();

      return result;
    } catch (error) {
      throw new Error("Error al registrar el puerto problemático");
    }
  }

  static async update(id, port) {
    try {
      const portBad = await PortsBad.findByPk(id);
      return await portBad.update(port);
    } catch (error) {
      throw new Error("Error al actualizar el puerto problemático");
    }
  }

  static async delete(id) {
    try {
      const portBad = await PortsBad.findByPk(id);
      const box = await Boxes.findByPk(portBad.boxId);

      box.portsBad += 1;
      await box.save();

      await portBad.destroy();
      return true;
    } catch (error) {
      throw new Error("Error al eliminar el puerto problemático");
    }
  }
}

module.exports = PortsBadServices;
