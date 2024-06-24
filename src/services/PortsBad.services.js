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

  static async create(port) {
    try {
      const box = await Boxes.findByPk(port.boxId);
      if (!box.portsBad.includes(port.portNumber)) {
        box.portsBad.push(port.portNumber);
        await box.save();
      }
      return await PortsBad.create(port);
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
      if (box.portsBad.includes(portBad.portNumber)) {
        box.portsBad = box.portsBad.filter(
          (port) => port !== portBad.portNumber
        );
        await box.save();
      }
      await portBad.destroy();
      return true;
    } catch (error) {
      throw new Error("Error al eliminar el puerto problemático");
    }
  }
}

module.exports = PortsBadServices;
