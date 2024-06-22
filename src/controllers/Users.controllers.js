const { UsersServices } = require("../services");

const usersReadAll = async (req, res) => {
  try {
    const result = await UsersServices.getAll();
    res.status(200).json(result);
  } catch (error) {}
};
const usersRead = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.get(id);
    res.status(200).json(result);
  } catch (error) {}
};
const usersRegister = async (req, res) => {
  try {
    const user = req.body;
    const result = await UsersServices.create(user);
    res.status(201).json({ message: "Usuario creado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const usersActualize = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const result = await UsersServices.update(id, user);
    res.status(200).json({ message: "Usuario actualizado con éxito", result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const usersEliminate = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const result = await UsersServices.delete(id, user);
    res.status(200).json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const userSearch = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }
    const users = await UsersServices.searchByName(query);
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  usersReadAll,
  usersRead,
  usersRegister,
  usersActualize,
  usersEliminate,
  userSearch,
};
