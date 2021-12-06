const { classes, join_classes, users } = require("../../models");
const service = async (req, res) => {
  try {
    if (req.params.id) {
      const where = {
        id: req.params.id,
      };
      const data = await users.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        include: {
          model: classes,
          where,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        },
      });

      return res.json({ msg: "sukses", data: data });
    } else {
      const data = await join_classes.findAll({
        where: { user_id: req.auth.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        include: {
          model: classes,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
      });
      return res.json({ msg: "sukses", data: data });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
  // try {
  //   const where = {};
  //   if (req.params.id) {
  //     where.class_id = req.params.id;
  //   }
  //   const data = await join_classes.findAll({
  //     where,
  //     attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
  //     include: {
  //       model: users,
  //       attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
  //     },
  //   });
  //   return res.json({ msg: "sukses", data: data });
  // } catch (error) {
  //   return res.status(500).json({ msg: error.toString() });
  // }
};

module.exports = { service };
