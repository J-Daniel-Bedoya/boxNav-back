const { PortsBad, Boxes } = require("../models");

class PortsBadServices {
  static async getAll(boxId) {
    try {
      return await PortsBad.findAll({ where: { boxId } });
    } catch (error) {
      throw new Error("Error al obtener los puertos problemáticos");
    }
  }

  static async get(boxId, id) {
    try {
      return await PortsBad.findOne({ where: { boxId, id } });
    } catch (error) {
      throw new Error("Error al obtener el puerto problemático");
    }
  }

  static async create(boxId) {
    try {
      const box = await Boxes.findByPk(boxId);
      const result = await PortsBad.create(port);

      box.portsBad += 1;
      await box.save();

      return result;
    } catch (error) {
      throw new Error("Error al registrar el puerto problemático");
    }
  }

  static async update(boxId, id, port) {
    try {
      const portBad = await PortsBad.findOne({ where: { boxId, id } });
      if (!portBad) {
        return null;
      }
      return await portBad.update(port);
    } catch (error) {
      throw new Error("Error al actualizar el puerto problemático");
    }
  }

  static async delete(id, boxId) {
    try {
      const portBad = await PortsBad.findOne({ where: { boxId, id } });
      if (!portBad) {
        return null;
      }
      const box = await Boxes.findByPk(boxId);

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
