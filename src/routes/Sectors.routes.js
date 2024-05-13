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

router.get("/sector", authenticate, sectorsReadAll);
router.get("/sector/:id", authenticate, sectorsRead);
router.post("/sector", authenticate, sectorsRegister);
router.patch("/sector/:id", authenticate, sectorsActualize);
router.delete("/sector/:id", authenticate, sectorsEliminate);

module.exports = router;
