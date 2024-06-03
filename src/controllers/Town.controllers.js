const { TownServices } = require("../services");

const townReadAll = async (req, res) => {
  try {
    const result = await TownServices.getAll();
    res.status(200).json(result);
  } catch (error) {}
};
const townRead = async (req, res) => {
  try {
    const { id } = req.params;
    const { offset = 0, limit = 10 } = req.query;
    const result = await TownServices.get(id, offset, limit);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const townRegister = async (req, res) => {
  try {
    const town = req.body;
    const result = await TownServices.create(town);
    res.status(201).json({ message: "Pueblo creado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const townActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const town = req.body;
    const result = await TownServices.update(id, town);
    res.status(200).json({ message: "Pueblo actualizadao con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const townEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TownServices.delete(id);
    res.status(200).json({ message: "Pueblo eliminado con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
};
