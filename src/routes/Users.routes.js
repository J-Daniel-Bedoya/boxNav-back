const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  usersReadAll,
  usersRead,
  usersRegister,
  usersActualize,
  usersEliminate,
} = require("../controllers");

router.get("/user", authenticate, usersReadAll);
router.get("/user/:id", authenticate, usersRead);
router.post("/user", authenticate, usersRegister);
router.patch("/user/:id", authenticate, usersActualize);
router.delete("/user/:id", authenticate, usersEliminate);

module.exports = router;
