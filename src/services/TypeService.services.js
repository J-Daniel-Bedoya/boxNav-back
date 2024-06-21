const { TypeService } = require("../models");

class TypeServiceServices {
  static async getAll() {
    try {
      const result = await TypeService.findAll({
        order: [["id", "ASC"]], // Ordenar por ID o cualquier otro campo relevante
      });
      return result;
    } catch (error) {
      throw new Error("Error al obtener los servicios");
    }
  }

  static async get(id) {
    try {
      const result = await TypeService.findOne({
        where: { id },
      });
      if (!result) {
        throw new Error("Servicio no encontrado");
      }
      return result;
    } catch (error) {
      throw new Error("Error al obtener el servicio");
    }
  }

  static async create(service) {
    try {
      const result = await TypeService.create(service);
      return result;
    } catch (error) {
      throw new Error("Error al crear el servicio");
    }
  }

  static async update(id, service) {
    try {
      const [updated] = await TypeService.update(service, {
        where: { id },
      });
      if (updated) {
        const updatedService = await TypeService.findOne({ where: { id } });
        return updatedService;
      }
      throw new Error("Servicio no encontrado");
    } catch (error) {
      throw new Error("Error al actualizar el servicio");
    }
  }

  static async delete(id) {
    try {
      const result = await TypeService.destroy({ where: { id } });
      if (!result) {
        throw new Error("Servicio no encontrado");
      }
      return "Servicio eliminado con éxito";
    } catch (error) {
      throw new Error("Error al eliminar el servicio");
    }
  }
}

module.exports = TypeServiceServices;
