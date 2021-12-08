const { users, join_classes, schedules, classes } = require("../../models");

const service = async (req, res, next) => {
  try {
    const userReq = await users.findOne({
      where: { id: req.auth.id },
      attributes: [],
      include: {
        model: classes,
        attributes: ["id", "name", "code"],
        through: { attributes: ["role"] },
        include: {
          model: schedules,
          attributes: ["id", "name", "code", "start", "end"],
          include: {
            model: join_classes,
            as: "absensi",
            where: { user_id: req.auth.id },
            required: false,
          },
        },
      },
    });
    if (userReq) {
      userReq.classes.map((kelas) => {
        kelas.schedules.map((sesi) => {
          sesi.dataValues.absen = sesi.absensi.length > 0 ? "Done" : "Not Yet";
          delete sesi.dataValues.absensi;
        });
      });
      return res.json({ data: userReq.classes });
    } else {
      return res.status(404).json({ msg: "user not found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
