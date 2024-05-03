const { AddressServices } = require("../services");

const addressReadAll = async (req, res) => {
  try {
    const result = await AddressServices.getAll();
    res.json(result);
  } catch (error) {}
};
const addressRead = async (req, res) => {
  try {
    const id = req.params;
    const result = await AddressServices.get(id);
    res.json(result);
  } catch (error) {}
};
const addressRegister = async (req, res) => {
  try {
    const address = req.body;
    const result = await AddressServices.create(address);
    res.status(200).json({ message: "Dirección creada con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const addressActualize = async (req, res) => {
  try {
    const id = req.params;
    const address = req.body;
    const result = await AddressServices.update(id, address);
    res
      .status(200)
      .json({ message: "Dirección actualizada con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const addressEliminate = async (req, res) => {
  try {
    const id = req.params;
    const result = await AddressServices.delete(id);
    res.json({ message: "Dirección eliminada con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addressReadAll,
  addressRead,
  addressRegister,
  addressActualize,
  addressEliminate,
};
