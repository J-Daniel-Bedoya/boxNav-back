const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  serviceReadAll,
  serviceRead,
  serviceRegister,
  serviceActualize,
  serviceEliminate,
} = require("../controllers");

router.get("/service", authenticate, serviceReadAll);
router.get("/service/:id", authenticate, serviceRead);
router.post("/service", authenticate, serviceRegister);
router.patch("/service/:id", authenticate, serviceActualize);
router.delete("/service/:id", authenticate, serviceEliminate);

module.exports = router;
