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

router.get("/users", authenticate, usersReadAll);
router.get("/users/:id", authenticate, usersRead);
router.post("/users", authenticate, usersRegister);
router.patch("/users/:id", authenticate, usersActualize);
router.delete("/users/:id", authenticate, usersEliminate);

module.exports = router;
