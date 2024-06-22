const { Users, Town, Sectors, Boxes, TypeService } = require("../models");

class UsersServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        order: [["id", "ASC"]], // Ordenar por ID o cualquier otro campo relevante
      });
      return result;
    } catch (error) {
      throw new Error("Error al obtener los usuarios");
    }
  }

  static async get(id) {
    try {
      const result = await Users.findOne({
        where: { id },
      });
      if (!result) {
        throw new Error("Usuario no encontrado");
      }
      return result;
    } catch (error) {
      throw new Error("Error al obtener el usuario");
    }
  }

  static async create(user) {
    try {
      const town = await Town.findByPk(user.townId);
      const sector = await Sectors.findByPk(user.sectorId);
      const box = await Boxes.findByPk(user.boxId);
      const service = await TypeService.findByPk(user.serviceId);

      if (!town) throw new Error(`Town with id ${user.townId} not found`);
      if (!sector) throw new Error(`Sector with id ${user.sectorId} not found`);
      if (!box) throw new Error(`Box with id ${user.boxId} not found`);
      if (!service)
        throw new Error(`Service with id ${user.serviceId} not found`);

      const result = await Users.create(user);

      town.numberUsers += 1;
      sector.numberUsers += 1;
      box.numberUsers += 1;
      service.numberUsers += 1;

      await town.save();
      await sector.save();
      await box.save();
      await service.save();

      return result;
    } catch (error) {
      throw new Error(`Error al crear el usuario: ${error.message}`);
    }
  }

  static async update(id, user) {
    try {
      const [updated] = await Users.update(user, {
        where: { id },
      });

      if (updated) {
        const updatedUser = await Users.findOne({ where: { id } });
        return updatedUser;
      }
      throw new Error("Usuario no encontrado");
    } catch (error) {
      throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const user = await Users.findByPk(id);
      if (!user) throw new Error("Usuario no encontrado");

      const town = await Town.findByPk(user.townId);
      const sector = await Sectors.findByPk(user.sectorId);
      const box = await Boxes.findByPk(user.boxId);
      const service = await TypeService.findByPk(user.serviceId);

      if (!town) throw new Error(`Town with id ${user.townId} not found`);
      if (!sector) throw new Error(`Sector with id ${user.sectorId} not found`);
      if (!box) throw new Error(`Box with id ${user.boxId} not found`);
      if (!service)
        throw new Error(`Service with id ${user.serviceId} not found`);

      const result = await Users.destroy({ where: { id } });

      town.numberUsers -= 1;
      sector.numberUsers -= 1;
      box.numberUsers -= 1;
      service.numberUsers -= 1;

      await town.save();
      await sector.save();
      await box.save();
      await service.save();

      return result;
    } catch (error) {
      throw new Error(`Error al eliminar el usuario: ${error.message}`);
    }
  }
}

module.exports = UsersServices;
