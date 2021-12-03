const { materials, schedules } = require("../../models");
const service = async (req, res) => {
  try {
    const where = {};
    if (req.params.id) {
      where.schedule_id = req.params.id;
    }
    const data = await materials.findAll({
      where,
      order: [["created_at", "DESC"]],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: schedules,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};

module.exports = { service };
