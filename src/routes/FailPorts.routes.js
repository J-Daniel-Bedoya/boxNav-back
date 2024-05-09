const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  failPortsReadAll,
  failPortsRead,
  failPortsRegister,
  failPortsActualize,
  failPortsEliminate,
} = require("../controllers");

router.get("/ports", authenticate, failPortsReadAll);
router.get("/ports/:id", authenticate, failPortsRead);
router.post("/ports", authenticate, failPortsRegister);
router.patch("/ports/:id", authenticate, failPortsActualize);
router.delete("/ports/:id", authenticate, failPortsEliminate);

module.exports = router;
