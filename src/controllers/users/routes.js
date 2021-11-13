const router = require("express").Router();
const createUsers = require("./create.usersController");
const getUsers = require("./get.usersController");
const updateUsers = require("./update.usersController");
const deleteUsers = require("./delete.usersController");
router.post("/", createUsers.service);
router.get("/", getUsers.service);
router.put("/:id", updateUsers.service);
router.delete("/:id", deleteUsers.service);

module.exports = router;
