const { schedules } = require("../../models");
const service = async (req, res) => {
  try {
    const data = await schedules.create(req.body);
    return res.status(200).json({
      status: "success",
      message: "schedule created successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: error.toString(),
    });
  }
};

module.exports = { service };
