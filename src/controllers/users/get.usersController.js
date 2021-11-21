const { users } = require("../../models");
const service = async (req, res) => {
  try {
    const result = await users.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { service };
