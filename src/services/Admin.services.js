const { Admin } = require("../models");

class AdminServices {
  static async getAll() {
    try {
      const result = await Admin.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await Admin.findOne({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(admin) {
    try {
      const result = await Admin.create(admin);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, admin) {
    try {
      const result = await Admin.update(admin, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Admin.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AdminServices;
