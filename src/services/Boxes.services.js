const { Boxes, Town } = require("../models");

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
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(box) {
    try {
      const town = await Town.findByPk(box.townId);
      const result = await Boxes.create(box);
      town.boxNumber += 1;
      await town.save();

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, box) {
    try {
      const result = await Boxes.update(box, {
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Boxes.destroy({ where: id });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BoxesServices;
