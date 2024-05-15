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
  PortsBadReadAll,
  PortsBadRead,
  PortsBadRegister,
  PortsBadActualize,
  PortsBadEliminate,
} = require("./PortsBad.controllers");

const {
  sectorsReadAll,
  sectorsRead,
  sectorsRegister,
  sectorsActualize,
  sectorsEliminate,
} = require("./Sectors.controllers");

const {
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
} = require("./Town.controllers");
const {
  serviceReadAll,
  serviceRead,
  serviceRegister,
  serviceActualize,
  serviceEliminate,
} = require("./TypeService.controllers");

const {
  adminReadAll,
  adminRead,
  adminRegister,
  adminActualize,
  adminEliminate,
} = require("./Admin.controllers");

const { adminLogin, deleteLogout } = require("./auth.controllers");

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
  PortsBadReadAll,
  PortsBadRead,
  PortsBadRegister,
  PortsBadActualize,
  PortsBadEliminate,
  //
  sectorsReadAll,
  sectorsRead,
  sectorsRegister,
  sectorsActualize,
  sectorsEliminate,
  //
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
  //
  serviceReadAll,
  serviceRead,
  serviceRegister,
  serviceActualize,
  serviceEliminate,
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
