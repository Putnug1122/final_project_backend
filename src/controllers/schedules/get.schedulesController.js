const { schedules } = require("../../models");
const service = async (req, res) => {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }
    const schedulesData = await schedules.findAll({
      where,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.status(200).json({
      schedules: schedulesData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

module.exports = { service };