const { users } = require("../../models");
const { compareSync } = require("bcrypt");
const { createToken } = require("../../middleware/jwt");
const service = async (req, res) => {
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
      message: "Login success",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports = { service };
