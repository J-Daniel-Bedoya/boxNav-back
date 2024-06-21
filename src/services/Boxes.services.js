const { Boxes, Town, Sectors, Users } = require("../models");

class BoxesServices {
  static async getAll() {
    try {
      const result = await Boxes.findAll({
        order: [["numberBox", "ASC"]], // Ordenar por numberBox
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async get(id) {
    try {
      const result = await Boxes.findOne({
        where: { id },
        include: {
          model: Users,
          as: "users",
          attributes: ["id", "userName", "portNumber"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(box) {
    try {
      const town = await Town.findByPk(box.townId);
      const sector = await Sectors.findByPk(box.sectorId);

      // Encontrar el último número de caja y asignar el siguiente
      const lastBox = await Boxes.findOne({
        order: [["numberBox", "DESC"]],
      });
      box.numberBox = lastBox ? lastBox.numberBox + 1 : 1;

      const result = await Boxes.create(box);

      // Actualizar el número de cajas en town y sector
      town.numberBoxes = (town.numberBoxes || 0) + 1;
      sector.numberBoxes = (sector.numberBoxes || 0) + 1;
      await town.save();
      await sector.save();

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, box) {
    try {
      const [updated] = await Boxes.update(box, {
        where: { id },
      });
      if (updated) {
        return await Boxes.findOne({ where: { id } });
      }
      throw new Error("Caja no encontrada");
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const box = await Boxes.findByPk(id);
      if (!box) throw new Error("Caja no encontrada");

      const town = await Town.findByPk(box.townId);
      const sector = await Sectors.findByPk(box.sectorId);

      const result = await Boxes.destroy({ where: { id } });

      // Actualizar el número de cajas en town y sector
      town.numberBoxes = (town.numberBoxes || 0) - 1;
      sector.numberBoxes = (sector.numberBoxes || 0) - 1;
      await town.save();
      await sector.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BoxesServices;
