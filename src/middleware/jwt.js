const jwt = require("jsonwebtoken");

const createToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    rule: user.rule,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, "private-key-project", options);
};

const checkJWT = (req, res, next) => {
  const token = req.get("Authorization");
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
