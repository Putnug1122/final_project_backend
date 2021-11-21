const { users } = require("../../models");
const { body } = require("express-validator");
const service = async (req, res, next) => {
  try {
    const user = req.body;
    const requestDB = await users.create(user);
    res.status(200).json({
      status: "success",
      data: requestDB,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.toString(),
    });
  }
};

const validation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Email is not valid")
    .custom((value) => {
      return users.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("Email already exists");
        }
      });
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required!")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long!"),
  body("full_name")
    .notEmpty()
    .withMessage("Name is required!")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long!"),
];

module.exports = { service, validation };
