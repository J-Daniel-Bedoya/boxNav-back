const { TypeServiceServices } = require("../services");

const serviceReadAll = async (req, res) => {
  try {
    const result = await TypeServiceServices.getAll();
    res.status(200).json(result);
  } catch (error) {}
};
const serviceRead = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TypeServiceServices.get(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const serviceRegister = async (req, res) => {
  try {
    const service = req.body;
    const result = await TypeServiceServices.create(service);
    res.status(201).json({ message: "Servicio creado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const serviceActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const service = req.body;
    const result = await TypeServiceServices.update(id, service);
    res
      .status(200)
      .json({ message: "Servicio actualizadao con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const serviceEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TypeServiceServices.delete(id);
    res.status(200).json({ message: "Servicio eliminado con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  serviceReadAll,
  serviceRead,
  serviceRegister,
  serviceActualize,
  serviceEliminate,
};
