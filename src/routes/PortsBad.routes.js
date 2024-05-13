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

router.get("/port", authenticate, PortsBadReadAll);
router.get("/port/:id", authenticate, PortsBadRead);
router.post("/port", authenticate, PortsBadRegister);
router.patch("/port/:id", authenticate, PortsBadActualize);
router.delete("/port/:id", authenticate, PortsBadEliminate);

module.exports = router;
