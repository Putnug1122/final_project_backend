const router = require("express").Router();
const createJoinClass = require("./create.joinclassesController");
const getJoinClass = require("./get.joinclassesController");
const leaveJoinClass = require("./leave.joinclassesController");
const userJWT = require("../../middleware/jwt");

router.post("/", userJWT.checkJWT, createJoinClass.service);
router.get("/", userJWT.checkJWT, getJoinClass.service);
router.get("/:id", userJWT.checkJWT, getJoinClass.service);
router.get("/:id", userJWT.checkJWT, leaveJoinClass.service);
router.delete("/:id", userJWT.checkJWT, leaveJoinClass.service);

module.exports = router;
