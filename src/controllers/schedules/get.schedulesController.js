const { schedules, materials, classes } = require("../../models");
const service = async (req, res) => {
  try {
    const where = {};
    if (req.params.id) {
      where.class_id = req.params.id;
    }
    const schedulesData = await schedules.findAll({
      where,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: classes,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    if (!req.params.id)
      return res.json({ msg: "success", data: schedulesData });
    return res.status(200).json(schedulesData);
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

module.exports = { service };
