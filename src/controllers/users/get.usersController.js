const { users } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.auth) {
      where.id = req.auth.id;
    } else {
      const requestDB = await users.findAll({
        where,
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      });
      return res.json({ msg: "data semua user", data: requestDB });
    }

    const requestDB = await users.findAll({
      where,
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    });
    return res.json({
      msg: "data user berhasil diterima.",
      data: requestDB[0],
    });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
