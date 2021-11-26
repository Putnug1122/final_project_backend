const jwt = require("jsonwebtoken");

const createToken = (user) => {
  delete user.dataValues.password;
  const token = jwt.sign({ user: user.dataValues }, "private-key-project", {
    expiresIn: "24h",
  });
  return token;
};

const checkJWT = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    jwt.verify(token, "private-key-project", (error, decode) => {
      if (error) {
        return res.status(401).json({ message: error.toString() });
      } else {
        req.auth = decode.user;
        next();
      }
    });
  }
};

module.exports = { createToken, checkJWT };
