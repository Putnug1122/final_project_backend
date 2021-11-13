const { schedules } = require("../../models");
const service = async (req, res) => {
  try {
    const where = { id: req.params.id };
    const data = req.body;
    const result = await schedules.update(data, { where });
    return res.status(200).json({
      status: 200,
      message: "Successfully updated",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.toString(),
    });
  }
};

module.exports = { service };
