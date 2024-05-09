const {
  usersReadAll,
  usersRead,
  usersRegister,
  usersActualize,
  usersEliminate,
} = require("./Users.controllers");

const {
  boxesReadAll,
  boxesRead,
  boxesRegister,
  boxesActualize,
  boxesEliminate,
} = require("./Boxes.controllers");

const {
  failPortsReadAll,
  failPortsRead,
  failPortsRegister,
  failPortsActualize,
  failPortsEliminate,
} = require("./FailPorts.controllers");

const {
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
} = require("./Town.controllers");

const {
  adminReadAll,
  adminRead,
  adminRegister,
  adminActualize,
  adminEliminate,
} = require("./Admin.controllers");

const { adminLogin, deleteLogout } = require("./Auth.controllers");

module.exports = {
  usersReadAll,
  usersRead,
  usersRegister,
  usersActualize,
  usersEliminate,
  //
  boxesReadAll,
  boxesRead,
  boxesRegister,
  boxesActualize,
  boxesEliminate,
  //
  failPortsReadAll,
  failPortsRead,
  failPortsRegister,
  failPortsActualize,
  failPortsEliminate,
  //
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
  //
  adminReadAll,
  adminRead,
  adminRegister,
  adminActualize,
  adminEliminate,
  //
  adminLogin,
  deleteLogout,
};
