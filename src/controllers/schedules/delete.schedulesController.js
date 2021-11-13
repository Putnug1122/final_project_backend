const { schedules } = require("../../models");
const service = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await schedules.findOne({ where: { id } });
    if (!schedule) {
      return res.status(404).json({
        message: "Schedule not found",
      });
    }
    await schedule.destroy();
    return res.status(200).json({
      message: "Schedule deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { service };
