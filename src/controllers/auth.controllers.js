const { AuthServices } = require("../services");

const adminLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);

    if (result) {
      const { email, password } = result.admin;
      const admin = { email, password };
      const token = AuthServices.genToken(admin);
      result.token = token;
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "Información inválida" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Email o contraseña inválida",
    });
  }
};
const deleteLogout = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.logout(credentials);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Email o contraseña inválida",
    });
  }
};

module.exports = {
  adminLogin,
  deleteLogout,
};
