const express = require("express");
const router = express.Router();
const createSchedules = require("./create.schedulesController");
const getSchedules = require("./get.schedulesController");
const updateSchedules = require("./update.schedulesController");
const deleteSchedules = require("./delete.schedulesController");
const auth = require("../../middleware/jwt");
router.post("/", auth.checkJWT, createSchedules.service);
router.get("/", auth.checkJWT, getSchedules.service);
router.get("/:id", auth.checkJWT, getSchedules.service);
router.put("/:id", auth.checkJWT, updateSchedules.service);
router.delete("/:id", auth.checkJWT, deleteSchedules.service);
module.exports = router;
