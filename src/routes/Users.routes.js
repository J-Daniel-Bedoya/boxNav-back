const { Router } = require("express");
const router = Router();

const {
  usersReadAll,
  usersRead,
  usersRegister,
  usersActualize,
  usersEliminate,
} = require("../controllers");

router.get("/users", usersReadAll);
router.get("/users/:id", usersRead);
router.post("/users", usersRegister);
router.put("/users/:id", usersActualize);
router.delete("/users/:id", usersEliminate);

module.exports = router;
