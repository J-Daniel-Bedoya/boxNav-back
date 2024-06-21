const { Sectors, Town, Boxes } = require("../models");

class SectorsServices {
  static async getAll() {
    try {
      const result = await Sectors.findAll({
        order: [["id", "ASC"]], // Ordenar por ID o cualquier otro campo relevante
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async get(id) {
    try {
      const result = await Sectors.findOne({
        where: { id },
        include: {
          model: Boxes,
          as: "boxes",
          attributes: {
            exclude: [""],
          },
          order: [["numberBox", "ASC"]], // Asegurar que las cajas dentro del sector también estén ordenadas
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(sector) {
    try {
      const town = await Town.findByPk(sector.townId);
      if (!town) throw new Error("Town not found");

      const result = await Sectors.create(sector);

      town.numberSectors = (town.numberSectors || 0) + 1;
      await town.save();

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, sector) {
    try {
      const [updated] = await Sectors.update(sector, {
        where: { id },
      });
      if (updated) {
        return await Sectors.findOne({ where: { id } });
      }
      throw new Error("Sector not found");
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const sector = await Sectors.findByPk(id);
      if (!sector) throw new Error("Sector not found");

      const town = await Town.findByPk(sector.townId);
      if (!town) throw new Error("Town not found");

      const result = await Sectors.destroy({ where: { id } });

      town.numberSectors = (town.numberSectors || 0) - 1;
      await town.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SectorsServices;
