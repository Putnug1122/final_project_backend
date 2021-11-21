const { users } = require("../../models");
const { compareSync } = require("bcrypt");
const { createToken } = require("../../middleware/jwt");
const { body, check } = require("express-validator");

const service = async (req, res, next) => {
  try {
    const user =
      (await users.findOne({ where: { email: req.body.username } })) ||
      (await users.findOne({ where: { username: req.body.username } }));
    if (user) {
      const validUser = compareSync(req.body.password, user.password);
      if (validUser) {
        const name = user.name || user.username;
        return res.json({
          status: "success",
          access: createToken(user),
          msg: `Welcome ${name}`,
        });
      } else {
        return res.status(401).json({ msg: "Wrong Password" });
      }
    } else {
      return res.status(404).json({ msg: "User Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

const validation = [
  body("username").notEmpty().withMessage("Email or Username required"),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { service, validation };
