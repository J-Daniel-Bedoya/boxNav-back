const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  sectorsReadAll,
  sectorsRead,
  sectorsRegister,
  sectorsActualize,
  sectorsEliminate,
} = require("../controllers");

router.get("/sectors", authenticate, sectorsReadAll);
router.get("/sectors/:id", authenticate, sectorsRead);
router.post("/sectors", authenticate, sectorsRegister);
router.patch("/sectors/:id", authenticate, sectorsActualize);
router.delete("/sectors/:id", authenticate, sectorsEliminate);

module.exports = router;
