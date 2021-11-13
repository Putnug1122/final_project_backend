const { materials } = require("../../models");
const service = async (req, res) => {
  try {
    const where = {
      id: req.params.id,
    };
    const data = req.body;
    const result = await materials.update(data, { where });
    return res.status(200).json({
      message: "Successfully updated",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.toString() });
  }
};

module.exports = { service };
