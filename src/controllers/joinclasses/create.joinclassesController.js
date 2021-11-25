const { join_classes } = require("../../models");
const service = async (req, res) => {
  try {
    const { class_id, user_id, role } = req.body;
    const data = await join_classes.create({
      class_id,
      user_id,
      role,
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { service };
