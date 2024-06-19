const { Town, Boxes, Users, Sectors, TypeService } = require("../models");

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
            separate: true,
            limit,
            offset,
          },
          {
            model: Users,
            as: "users",
            attributes: ["id", "userName", "boxId", "portNumber", "sectorId"],
            separate: true,
            limit,
            offset,
          },
          {
            model: TypeService,
            as: "service",
            attributes: ["id", "serviceName", "numberUsers"],
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
