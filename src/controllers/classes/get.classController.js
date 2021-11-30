const { classes, schedules, join_classes } = require("../../models");
const services = async (req, res) => {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }
    const requestDB = await classes.findAll({
      where,
      order: ["created_at"],
      include: [
        {
          model: schedules,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        // {
        //   model: join_classes,
        //   attributes: {
        //     exclude: ["createdAt", "updatedAt"],
        //   },
        // },
      ],
    });
    return res.json(requestDB);
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { services };
