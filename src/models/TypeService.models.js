const db = require("../utils/database");
const DataTypes = require("sequelize");

const TypeService = db.define("typeService", {
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
  usersNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "boxes_number",
  },
});

module.exports = TypeService;
