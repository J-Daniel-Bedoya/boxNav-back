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
    res.status(201).json({ message: "Caja creada con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const boxesActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const box = req.body;
    const result = await BoxesServices.update(id, box);
    res.status(200).json({ message: "Caja actualizada con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const boxesEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const box = req.body;
    const result = await BoxesServices.delete(id, box);
    res.status(200).json({ message: "Una caja ha sido eliminada con éxito" });
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
