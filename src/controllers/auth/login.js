// create login API
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../../config/database");
const { users } = require("../../models");

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        success: false,
        message: "Authentication failed. User not found.",
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const token = jwt.sign(user.toJSON(), config.secret, {
        expiresIn: "24h",
      });
      return res.json({
        success: true,
        message: "Authentication successful!",
        token: "JWT " + token,
      });
    });
  })(req, res, next);
};

module.exports = { login };
