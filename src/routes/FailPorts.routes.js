const { Router } = require("express");
const router = Router();

const {
  failPortsReadAll,
  failPortsRead,
  failPortsRegister,
  failPortsActualize,
  failPortsEliminate,
} = require("../controllers");

router.get("/ports", failPortsReadAll);
router.get("/ports/:id", failPortsRead);
router.post("/ports", failPortsRegister);
router.put("/ports/:id", failPortsActualize);
router.delete("/ports/:id", failPortsEliminate);

module.exports = router;
