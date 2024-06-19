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

  Town.hasMany(TypeService, { foreignKey: "townId", as: "service" });

  Sectors.hasMany(Boxes, { foreignKey: "sectorId", as: "boxes" });

  Boxes.hasMany(Users, { foreignKey: "boxId", as: "users" });
};

module.exports = initModels;
