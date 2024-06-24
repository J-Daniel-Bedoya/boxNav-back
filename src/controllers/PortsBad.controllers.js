const { PortsBadServices } = require("../services");

const PortsBadReadAll = async (req, res) => {
  try {
    const result = await PortsBadServices.getAll();
    res.status(200).json(result);
  } catch (error) {}
};
const PortsBadRead = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PortsBadServices.get(id);
    res.status(200).json(result);
  } catch (error) {}
};
const PortsBadRegister = async (req, res) => {
  try {
    const port = req.body;
    const result = await PortsBadServices.create(port);
    res.status(201).json({ message: "Usuario creado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const PortsBadActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const port = req.body;
    const result = await PortsBadServices.update(id, port);
    res.status(200).json({ message: "Usuario actualizado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const PortsBadEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const { boxId } = req.body;
    const result = await PortsBadServices.delete(id, boxId);
    res.status(200).json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  PortsBadReadAll,
  PortsBadRead,
  PortsBadRegister,
  PortsBadActualize,
  PortsBadEliminate,
};
