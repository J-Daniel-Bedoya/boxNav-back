const { Town, Boxes, Users, Sectors, TypeService } = require("../models");

class TownServices {
  static async getAll() {
    try {
      const result = await Town.findAll({
        order: [["id", "ASC"]], // Ordenar por ID o cualquier otro campo relevante
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async get(id, offset = 0, limit = 10) {
    try {
      const result = await Town.findOne({
        where: { id },
        include: [
          {
            model: Sectors,
            as: "sectors",
            attributes: ["id", "sectorName", "numberBoxes", "numberUsers"],
            order: [["id", "ASC"]], // Asegurar el orden de los sectores
            separate: true,
            limit,
            offset,
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
            order: [["numberBox", "ASC"]], // Asegurar el orden de las cajas
            separate: true,
            limit,
            offset,
          },
          {
            model: Users,
            as: "users",
            attributes: ["id", "userName", "boxId", "portNumber", "sectorId"],
            order: [["id", "ASC"]], // Asegurar el orden de los usuarios
            separate: true,
            limit,
            offset,
          },
          {
            model: TypeService,
            as: "service",
            attributes: ["id", "serviceName", "numberUsers"],
            order: [["id", "ASC"]], // Asegurar el orden de los servicios
            separate: true,
            limit,
            offset,
          },
        ],
        subQuery: false,
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
      const [updated] = await Town.update(town, {
        where: { id },
      });
      if (updated) {
        return await Town.findOne({ where: { id } });
      }
      throw new Error("Town not found");
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Town.destroy({ where: { id } });
      if (!result) {
        throw new Error("Town not found");
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TownServices;
