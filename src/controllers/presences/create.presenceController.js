const { presences, classes, join_classes, schedules } = require("../../models");
const service = async (req, res, next) => {
  try {
    const requestSchedule = await schedules.findOne({
      where: { schedule_code: req.body.schedule_code },
    });
    if (requestSchedule) {
      const requestClass = await classes.findOne({
        where: { class_code: req.body.class_code },
      });
      if (requestClass) {
        const requestJoinClass = await join_classes.findOne({
          where: { user_id: req.auth.id, class_id: requestClass.id },
        });
        if (requestJoinClass) {
          const payload = {
            schedule_id: requestSchedule.id,
            join_class_id: requestJoinClass.id,
          };
          const [requestDB, done] = await presences.findOrCreate({
            where: payload,
          });
          if (done) {
            return res.json({ msg: "Absen Berhasil", data: payload });
          } else if (!done) {
            return res.status(400).json({ msg: "Sudah Melakukan Absen" });
          } else {
            return res.status(400).json({ msg: "Gagal Melakukan Absen" });
          }
        } else {
          return res
            .status(400)
            .json({ msg: "Anda tidak terdaftar di kelas ini" });
        }
      } else {
        return res.status(404).json({ msg: "Kelas tidak ditemukan" });
      }
    } else {
      return res.status(404).json({ msg: "Kode Sesi Salah" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
