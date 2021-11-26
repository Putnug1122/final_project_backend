const router = require("express").Router();
const registerUser = require("./register.userController");
const validator = require("../../../helpers/validator");
router.post("/", registerUser.validation, validator, registerUser.service);

module.exports = router;
