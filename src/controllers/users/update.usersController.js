const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await users.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const updatedUser = await user.update(data);
    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { service };
