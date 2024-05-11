const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  PortsBadReadAll,
  PortsBadRead,
  PortsBadRegister,
  PortsBadActualize,
  PortsBadEliminate,
} = require("../controllers");

router.get("/ports", authenticate, PortsBadReadAll);
router.get("/ports/:id", authenticate, PortsBadRead);
router.post("/ports", authenticate, PortsBadRegister);
router.patch("/ports/:id", authenticate, PortsBadActualize);
router.delete("/ports/:id", authenticate, PortsBadEliminate);

module.exports = router;
