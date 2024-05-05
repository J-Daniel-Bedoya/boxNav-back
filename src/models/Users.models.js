const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");
const Address = require("./Address.models");

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
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "address_id",
      references: {
        model: Address,
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
    boxesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Boxes,
        key: "id",
      },
      field: "boxes_id",
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
