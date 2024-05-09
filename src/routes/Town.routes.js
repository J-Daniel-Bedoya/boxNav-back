const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
} = require("../controllers");

router.get("/town", authenticate, townReadAll);
router.get("/town/:id", authenticate, townRead);
router.post("/town", authenticate, townRegister);
router.patch("/town/:id", authenticate, townActualize);
router.delete("/town/:id", authenticate, townEliminate);

module.exports = router;
