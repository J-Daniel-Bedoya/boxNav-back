const { AdminServices } = require("../services");
// const transporter = require("../utils/mailter");
// const welcomeTemplate = require("../templates/welcome");

const adminReadAll = async (req, res, next) => {
  try {
    const result = await AdminServices.getAll();
    res.json(result);
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
    res.json(result);
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
    res.status(201).json(result);

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
    res.json(result);
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
    res.json(result);
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
