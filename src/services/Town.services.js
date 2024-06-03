const { Town, Boxes, Users, Sectors } = require("../models");

class TownServices {
  static async getAll() {
    try {
      const result = await Town.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id, offset, limit) {
    try {
      const result = await Town.findOne({
        where: { id },
        include: [
          {
            model: Sectors,
            as: "sectors",
            attributes: ["id", "sectorName", "numberBoxes", "numberUsers"],
            separate: true, // Para habilitar paginación en la asociación
            limit: parseInt(limit, 10),
            offset: parseInt(offset, 10),
          },
          {
            model: Boxes,
            as: "boxes",
            attributes: [
              "id",
              "numberBox",
              "numberUsers",
              "sectorId",
              "numberPorts",
            ],
            separate: true, // Para habilitar paginación en la asociación
            limit: parseInt(limit, 10),
            offset: parseInt(offset, 10),
          },
          {
            model: Users,
            as: "users",
            attributes: ["id", "userName", "boxId", "portNumber", "sectorId"],
            separate: true, // Para habilitar paginación en la asociación
            limit: parseInt(limit, 10),
            offset: parseInt(offset, 10),
          },
        ],
        subQuery: false, // Asegúrate de establecer subQuery a false si es necesario
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
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Town.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TownServices;
