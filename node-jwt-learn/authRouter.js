const Router = require("express");
const AuthController = require("./AuthController");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

const router = new Router();
const controller = new AuthController();

const { registration, login, getUsers } = controller;

router.post(
  "/registration",
  [
    check("username", "Username cannot be empty").notEmpty(),
    check(
      "password",
      "Password must be not less than 4 and not more than 10 symbols"
    ).isLength({ min: 4, max: 10 }),
  ],
  registration
);
router.post("/login", login);
// router.get("/users", authMiddleware, getUsers);
router.get("/users", roleMiddleware(["USER", "ADMIN"]), getUsers);

module.exports = router;
