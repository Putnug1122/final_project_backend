const router = require("express").Router();
const getUsers = require("./get.usersController");
const updateUsers = require("./update.usersController");
const deleteUsers = require("./delete.usersController");
const auth = require("../../middleware/jwt");

router.put("/:id", updateUsers.service);
router.delete("/:id", deleteUsers.service);
router.get("/", getUsers.service);

router.get("/me", auth.checkJWT, getUsers.service);
// router.post("/logout", auth.checkJWT, userLogout.service);
module.exports = router;
