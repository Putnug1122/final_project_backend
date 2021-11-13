const { users } = require("../../models/");
const service = async (req, res) => {
  try {
    const data = req.body;
    const user = await users.create(data);
    return res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

module.exports = { service };
