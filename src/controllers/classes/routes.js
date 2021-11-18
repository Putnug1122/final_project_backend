const express = require("express");
const router = express.Router();
const createClass = require("./create.classController");
const getClass = require("./get.classController");
const updateClass = require("./update.classController");
const deleteClass = require("./delete.classController");
const validator = require("../../helpers/validator");
const { checkJWT } = require("../../middleware/jwt");
router.post(
  "/",
  checkJWT,
  createClass.validation,
  validator,
  createClass.services
);
router.get("/", getClass.services);
router.put("/:id", updateClass.validation, validator, updateClass.services);
router.delete("/:id", deleteClass.services);

module.exports = router;
