const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    await user.destroy();
    return res.status(200).json({
      message: "User deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { service };
