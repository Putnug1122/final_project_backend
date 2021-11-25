const { users } = require("../../models");
const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }
    const requestDB = await users.findAll({
      where,
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).json({
      status: "success",
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = { service };
