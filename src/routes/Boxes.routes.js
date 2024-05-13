const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  boxesReadAll,
  boxesRead,
  boxesRegister,
  boxesActualize,
  boxesEliminate,
} = require("../controllers");

router.get("/box", authenticate, boxesReadAll);
router.get("/box/:id", authenticate, boxesRead);
router.post("/box", authenticate, boxesRegister);
router.patch("/box/:id", authenticate, boxesActualize);
router.delete("/box/:id", authenticate, boxesEliminate);

module.exports = router;
