const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.models");
require("dotenv").config();

class AuthServices {
  static async authenticate(credentials) {
    try {
      const { email, password } = credentials;
      const result = await Admin.findOne({
        where: { email },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, admin: result } : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.SECRET, {
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
  static async logout(credentials) {
    try {
      const { email, password } = credentials;
      const admin = await Admin.findOne({
        where: { email },
      });

      if (admin) {
        const isValid = bcrypt.compareSync(password, admin.password);
        return isValid
          ? {
              remove: await admin.destroy(),
              message: "administrador eliminado correctamente",
            }
          : { message: "Contraseña incorrecta" };
      } else {
        return { message: "Email incorrecto" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
