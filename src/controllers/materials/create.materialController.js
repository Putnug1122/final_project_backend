const { materials } = require("../../models");
const service = async (req, res) => {
  try {
    const where = { schedule_id: req.params.id };
    const payload = req.body;
    const material = await materials.create(payload, where);
    return res
      .status(201)
      .json({ msg: "Material created successfully", material });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
