const { PortsBadServices } = require("../services");

const PortsBadReadAll = async (req, res) => {
  try {
    const result = await PortsBadServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los puertos problemáticos",
      error: error.message,
    });
  }
};

const PortsBadRead = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PortsBadServices.get(id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Puerto problemático no encontrado" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el puerto problemático",
      error: error.message,
    });
  }
};

const PortsBadRegister = async (req, res) => {
  try {
    const port = req.body;
    const result = await PortsBadServices.create(port);
    res
      .status(201)
      .json({ message: "Puerto problemático registrado con éxito", result });
  } catch (error) {
    res.status(400).json({
      message: "Error al registrar el puerto problemático",
      error: error.message,
    });
  }
};

const PortsBadActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const port = req.body;
    const result = await PortsBadServices.update(id, port);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Puerto problemático no encontrado" });
    }
    res
      .status(200)
      .json({ message: "Puerto problemático actualizado con éxito", result });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el puerto problemático",
      error: error.message,
    });
  }
};

const PortsBadEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PortsBadServices.delete(id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Puerto problemático no encontrado" });
    }
    res
      .status(200)
      .json({ message: "Puerto problemático eliminado con éxito" });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar el puerto problemático",
      error: error.message,
    });
  }
};

module.exports = {
  PortsBadReadAll,
  PortsBadRead,
  PortsBadRegister,
  PortsBadActualize,
  PortsBadEliminate,
};
