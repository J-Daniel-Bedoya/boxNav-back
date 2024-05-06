const db = require("../utils/database");
const DataTypes = require("sequelize");

const Town = db.define(
  "town",
  {
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
    boxNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "box_number",
    },
    userNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_number",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Town;
