const { SectorsServices } = require("../services");

const sectorsReadAll = async (req, res) => {
  try {
    const result = await SectorsServices.getAll();
    res.status(200).json(result);
  } catch (error) {}
};
const sectorsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SectorsServices.get(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const sectorsRegister = async (req, res) => {
  try {
    const sector = req.body;
    const result = await SectorsServices.create(sector);
    res.status(201).json({ message: "Sector creado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const sectorsActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const sectors = req.body;
    const result = await SectorsServices.update(id, sectors);
    res.status(200).json({ message: "Sector actualizado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const sectorsEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const sector = req.body;
    const result = await SectorsServices.delete(id, sector);
    res.status(200).json({ message: "Sector eliminado con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  sectorsReadAll,
  sectorsRead,
  sectorsRegister,
  sectorsActualize,
  sectorsEliminate,
};
