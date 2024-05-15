const { Users, TypeService } = require("../models");

class TypeServiceServices {
  static async getAll() {
    try {
      const result = await TypeService.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await TypeService.findOne({
        where: { id },
        include: {
          model: Users,
          as: "users",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(service) {
    try {
      const result = await TypeService.create(service);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, service) {
    try {
      const result = await TypeService.update(service, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await TypeService.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TypeServiceServices;
