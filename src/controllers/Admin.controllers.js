const { AdminServices } = require("../services");
// const transporter = require("../utils/mailter");
// const welcomeTemplate = require("../templates/welcome");

const adminReadAll = async (req, res, next) => {
  try {
    const result = await AdminServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const adminRead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await AdminServices.get(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const adminRegister = async (req, res, next) => {
  try {
    const newAdmin = req.body;
    const result = await AdminServices.create(newAdmin);
    res.status(201).json({
      message: "Un nuevo administrador ha sido agregado con éxito",
      result,
    });

    // transporter.sendMail({
    //   from: "<jbedoyachavarriaga@gmail.com>",
    //   to: result.email,
    //   subject: "Bienvenido My shop",
    //   text: `Hola ${result.username} bienvenido a la mejor tienda de productos online`,
    //   html: welcomeTemplate(result.username),
    // });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const adminActualize = async (req, res, next) => {
  try {
    const { id } = req.params;
    const admin = req.body;
    const result = await AdminServices.update(id, admin);
    res.status(200).json({
      message: "Los datos han sido actualizados correctamente",
      result,
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

const adminEliminate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await AdminServices.delete(id);
    res
      .status(200)
      .json({ message: "Un administrador ha sido eliminado exitosamente" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  adminReadAll,
  adminRead,
  adminRegister,
  adminActualize,
  adminEliminate,
};
