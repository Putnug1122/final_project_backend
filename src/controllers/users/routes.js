const router = require("express").Router();
const getUsers = require("./get.usersController");
const updateUsers = require("./update.usersController");
const deleteUsers = require("./delete.usersController");
const auth = require("../../middleware/jwt");
const userLogin = require("./login.userController");
const userRegister = require("./register.userController");
const userLogout = require("./logout.userController");
const validator = require("../../helpers/validator");

router.put("/:id", updateUsers.service);
router.delete("/:id", deleteUsers.service);
router.get("/", auth.checkJWT, getUsers.service);
router.post("/login", userLogin.validation, validator, userLogin.service);
router.post(
  "/register",
  userRegister.validation,
  validator,
  userRegister.service
);
router.get("/me", auth.checkJWT, getUsers.service);
router.post("/logout", auth.checkJWT, userLogout.service);
module.exports = router;
