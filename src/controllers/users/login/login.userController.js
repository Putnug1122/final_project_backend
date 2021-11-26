const { users } = require("../../../models");
const { compareSync } = require("bcrypt");
const { createToken } = require("../../../middleware/jwt");
const { body, check } = require("express-validator");

const service = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    if (!compareSync(password, user.password)) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }
    const token = createToken(user);
    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const validation = [
  body("email").notEmpty().withMessage("Email or Username required"),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { service, validation };
