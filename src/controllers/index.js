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
  addressReadAll,
  addressRead,
  addressRegister,
  addressActualize,
  addressEliminate,
} = require("./Address.controllers");

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
  addressReadAll,
  addressRead,
  addressRegister,
  addressActualize,
  addressEliminate,
};
