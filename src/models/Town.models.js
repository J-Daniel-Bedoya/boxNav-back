const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");

const Town = db.define("town", {
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
  boxesNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "boxes_number",
  },
  usersNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "users_number",
  },
  sectorsNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "sectors_number",
  },
});

module.exports = Town;
