const { join_classes } = require("../../models");

const service = async (req, res) => {
  try {
    const requestDB = await join_classes.destroy({
      where: {
        user_id: req.params.id,
      },
    });
    if (requestDB) {
      res.status(200).json({
        message: "Leave class success",
      });
    } else {
      res.status(400).json({
        message: "Leave class fail",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

module.exports = { service };
