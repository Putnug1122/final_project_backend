const { classes } = require("../../models");
const { body } = require("express-validator");
const services = async (req, res, next) => {
  try {
    const payload = req.body;
    const requestDB = await classes.create(payload);
    return res.json({ msg: "Kelas berhasil dibuat", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

const validation = [
  body("name")
    .notEmpty()
    .withMessage("Nama kelas harus diisi")
    .custom(async (value, { req }) => {
      const requestDB = await classes.findOne({
        where: { name: value },
        attributes: ["id"],
      });
      if (requestDB) {
        return Promise.reject("Nama kelas sudah ada");
      }
    }),
  body("description").notEmpty().withMessage("Deskripsi harus diisi"),
  body("code")
    .notEmpty()
    .withMessage("Kode kelas harus diisi")
    .custom(async (value, { req }) => {
      // code must 6 char length
      if (value.length !== 6) {
        return Promise.reject("Kode kelas harus 6 digit");
      }
    }),
  body("start_date").notEmpty().withMessage("Tanggal mulai harus diisi"),
  body("end_date").notEmpty().withMessage("Tanggal selesai harus diisi"),
];
module.exports = { services, validation };
