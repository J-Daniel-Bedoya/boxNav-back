const { Router } = require("express");
const router = Router();

const {
  boxesReadAll,
  boxesRead,
  boxesRegister,
  boxesActualize,
  boxesEliminate,
} = require("../controllers");

router.get("/boxes", boxesReadAll);
router.get("/boxes/:id", boxesRead);
router.post("/boxes", boxesRegister);
router.put("/boxes/:id", boxesActualize);
router.delete("/boxes/:id", boxesEliminate);

module.exports = router;
