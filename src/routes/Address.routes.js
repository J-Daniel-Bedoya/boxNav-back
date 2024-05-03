const { Router } = require("express");
const router = Router();

const {
  addressReadAll,
  addressRead,
  addressRegister,
  addressActualize,
  addressEliminate,
} = require("../controllers");

router.get("/address", addressReadAll);
router.get("/address/:id", addressRead);
router.post("/address", addressRegister);
router.put("/address/:id", addressActualize);
router.delete("/address/:id", addressEliminate);

module.exports = router;
