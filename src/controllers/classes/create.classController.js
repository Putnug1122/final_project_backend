const { classes } = require("../../models");
const services = async (req, res) => {
  try {
    const payload = req.body;
    const requestDB = await classes.create(payload);
    return res.json({ msg: "Kelas berhasil dibuat", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { services };
