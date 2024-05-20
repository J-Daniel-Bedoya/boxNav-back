const { Users, Town, Sectors, Boxes, TypeService } = require("../models");

class UsersServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id) {
    try {
      const result = await Users.findOne({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(user) {
    try {
      const town = await Town.findByPk(user.townId);
      const sector = await Sectors.findByPk(user.sectorId);
      const box = await Boxes.findByPk(user.boxId);
      const service = await TypeService.findByPk(user.serviceId);

      const result = await Users.create(user);

      if (town) {
        town.numberUsers += 1;
        await town.save();
      } else {
        console.log(town);
        throw new Error(`Town with id ${user.townId} not found`);
      }

      if (sector) {
        sector.numberUsers += 1;
        await sector.save();
      } else {
        throw new Error(`Sector with id ${user.sectorId} not found`);
      }

      if (box) {
        box.numberUsers += 1;
        await box.save();
      } else {
        throw new Error(`Box with id ${user.boxId} not found`);
      }

      if (service) {
        service.numberUsers += 1;
        await service.save();
      } else {
        throw new Error(`Service with id ${user.serviceId} not found`);
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, user) {
    try {
      const result = await Users.update(user, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id, user) {
    try {
      const town = await Town.findByPk(user.townId);
      const sector = await Sectors.findByPk(user.sectorId);
      const box = await Boxes.findByPk(user.boxId);
      const service = await TypeService.findByPk(user.serviceId);

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
      throw error;
    }
  }
}

module.exports = UsersServices;
