const { Users, Boxes, PortsBad, Town, Sectors, TypeService } = require(".");

const initModels = () => {
  Users, Boxes, PortsBad, Town, Sectors, TypeService;
  Town.hasMany(Boxes, { foreignKey: "townId", as: "boxes" });
  Town.hasMany(Users, { foreignKey: "townId", as: "users" });
  Town.hasMany(Sectors, { foreignKey: "townId", as: "sectors" });

  Sectors.hasMany(Boxes, { foreignKey: "sectorId", as: "boxes" });
};

module.exports = initModels;
