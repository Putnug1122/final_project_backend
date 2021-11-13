const { classes } = require("../../models");
const services = async (req, res) => {
  try {
    const where = { id: req.params.id };
    const requestDB = await classes.destroy({ where });
    if (requestDB) {
      return res.json({ msg: `Data dengan id: ${where.id} berhasil dihapus` });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { services };
