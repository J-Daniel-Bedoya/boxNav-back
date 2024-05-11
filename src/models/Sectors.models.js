const db = require("../utils/database");
const DataTypes = require("sequelize");
const Town = require("./Town.models");

const Sectors = db.define("sectors", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  townId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Town,
      key: "id",
      field: "town_id",
    },
  },
  boxesNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "box_number",
  },
  usersNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "user_number",
  },
});

module.exports = Sectors;
