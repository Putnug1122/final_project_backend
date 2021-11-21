const service = async (req, res, next) => {
  try {
    return res.json({ access: true, data: [] });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
