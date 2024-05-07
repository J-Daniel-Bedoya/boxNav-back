const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");
const Town = require("./Town.models");

const Users = db.define(
  "users",
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
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    townId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "town_id",
      references: {
        model: Town,
        key: "id",
      },
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boxId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Boxes,
        key: "id",
      },
      field: "box_id",
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Users;
