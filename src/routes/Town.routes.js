const { Router } = require("express");
const router = Router();

const {
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
} = require("../controllers");

router.get("/town", townReadAll);
router.get("/town/:id", townRead);
router.post("/town", townRegister);
router.put("/town/:id", townActualize);
router.delete("/town/:id", townEliminate);

module.exports = router;
