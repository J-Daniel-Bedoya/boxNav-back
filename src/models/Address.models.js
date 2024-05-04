const db = require("../utils/database");
const DataTypes = require("sequelize");

const Address = db.define(
  "address",
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
    },
    userNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Address;
