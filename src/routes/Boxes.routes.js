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

router.get("/boxes", authenticate, boxesReadAll);
router.get("/boxes/:id", authenticate, boxesRead);
router.post("/boxes", authenticate, boxesRegister);
router.patch("/boxes/:id", authenticate, boxesActualize);
router.delete("/boxes/:id", authenticate, boxesEliminate);

module.exports = router;
