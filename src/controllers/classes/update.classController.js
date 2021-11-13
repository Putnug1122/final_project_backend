const { classes } = require("../../models");
const services = async (req, res) => {
  try {
    const payload = req.body;
    const where = { id: req.params.id };
    const requestDB = await classes.update(payload, { where });
    return res.json({ msg: "Kelas berhasil diupdate", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { services };
