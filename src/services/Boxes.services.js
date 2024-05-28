const { Boxes, Town, Sectors, Users } = require("../models");

class BoxesServices {
  static async getAll() {
    try {
      const result = await Boxes.findAll();
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

      const result = await Boxes.create(box);

      town.numberBoxes += 1;
      sector.numberBoxes += 1;
      await town.save();
      await sector.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, box) {
    try {
      const result = await Boxes.update(box, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const town = await Town.findByPk(box.townId);
      const sector = await Sectors.findByPk(box.sectorId);

      const result = await Boxes.destroy({ where: { id } });

      town.numberBoxes -= 1;
      sector.numberBoxes -= 1;
      await town.save();
      await sector.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BoxesServices;
