const {
  classes,
  Sequelize: { Op },
} = require("../../models");
const { body } = require("express-validator");
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

const validation = [
  body("name")
    .notEmpty()
    .custom(async (value, { req }) => {
      const where = { name: value, id: { [Op.ne]: req.params.id } };
      const requestDB = await classes.findOne({ where });
      if (requestDB) {
        return Promise.reject("Nama kelas sudah ada");
      }
    }),
];
module.exports = { services, validation };
