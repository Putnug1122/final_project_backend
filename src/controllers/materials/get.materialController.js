const { materials } = require("../../models");
const service = async (req, res) => {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }
    const data = await materials.findAll({
      where,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};

module.exports = { service };
