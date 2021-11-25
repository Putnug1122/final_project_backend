const { classes, join_classes } = require("../../models");
const service = async (req, res) => {
  try {
    const data = await join_classes.findAll({
      where: {
        user_id: req.auth.id,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: classes,
        as: "class",
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    });
    res.status(200).send({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(400).send({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = { service };
