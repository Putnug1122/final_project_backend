const router = require("express").Router();
const createPresence = require("./create.presenceController");
const getPresence = require("./get.presencesController");
const auth = require("../../middleware/jwt");
router.post("/", auth.checkJWT, createPresence.service);
router.get("/", auth.checkJWT, getPresence.service);

module.exports = router;
