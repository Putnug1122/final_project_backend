const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }
    const data = await users.findAll({
      where,
      attributes: {
        exclude: ["password"],
      },
    });
    return res.status(200).json(data);
  } catch (error) {}
};

module.exports = { service };
