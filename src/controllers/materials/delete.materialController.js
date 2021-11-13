const { materials } = require("../../models");
const service = async (req, res) => {
  const { id } = req.params;
  const material = await materials.findOne({ where: { id } });
  if (!material) {
    return res.status(404).json({ message: "Material not found" });
  }
  await material.destroy();
  return res.status(200).json({ message: "Material deleted" });
};

module.exports = { service };
