const { BoxesServices } = require("../services");

const boxesReadAll = async (req, res) => {
  try {
    const result = await BoxesServices.getAll();
    res.json(result);
  } catch (error) {}
};
const boxesRead = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BoxesServices.get(id);
    res.json(result);
  } catch (error) {}
};
const boxesRegister = async (req, res) => {
  try {
    const box = req.body;
    const result = await BoxesServices.create(box);
    res.status(201).json({ message: "Usuario creado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const boxesActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const box = req.body;
    const result = await BoxesServices.update(id, box);
    res.status(200).json({ message: "Usuario actualizado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const boxesEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BoxesServices.delete(id);
    res.status(200).json({ message: "Un usuario ha sido eliminado con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  boxesReadAll,
  boxesRead,
  boxesRegister,
  boxesActualize,
  boxesEliminate,
};
