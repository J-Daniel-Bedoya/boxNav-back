const {
  Users,
  Boxes,
  PortsBad,
  Town,
  Sectors,
  TypeService,
  Admin,
} = require(".");

const initModels = () => {
  Users, Boxes, PortsBad, Town, Sectors, TypeService, Admin;
  Town.hasMany(Boxes, { foreignKey: "townId", as: "boxes" });
  Town.hasMany(Users, { foreignKey: "townId", as: "users" });
  Town.hasMany(Sectors, { foreignKey: "townId", as: "sectors" });

  Sectors.hasMany(Boxes, { foreignKey: "sectorId", as: "boxes" });

  Boxes.hasMany(Users, { foreignKey: "boxesId", as: "users" });
};

module.exports = initModels;
