const { materials } = require("../../models");
const service = async (req, res) => {
  try {
    const material = await materials.create(req.body);
    return res
      .status(201)
      .json({ msg: "Material created successfully", material });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
