const { FailPortsServices } = require("../services");

const failPortsReadAll = async (req, res) => {
  try {
    const result = await FailPortsServices.getAll();
    res.json(result);
  } catch (error) {}
};
const failPortsRead = async (req, res) => {
  try {
    const id = req.params;
    const result = await FailPortsServices.get(id);
    res.json(result);
  } catch (error) {}
};
const failPortsRegister = async (req, res) => {
  try {
    const port = req.body;
    const result = await FailPortsServices.create(port);
    res.status(200).json({ message: "Usuario creado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const failPortsActualize = async (req, res) => {
  try {
    const id = req.params;
    const port = req.body;
    const result = await FailPortsServices.update(id, port);
    res.status(200).json({ message: "Usuario actualizado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const failPortsEliminate = async (req, res) => {
  try {
    const id = req.params;
    const result = await FailPortsServices.delete(id);
    res.json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  failPortsReadAll,
  failPortsRead,
  failPortsRegister,
  failPortsActualize,
  failPortsEliminate,
};
