var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const routes = require("./src/routes");
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
const { sequelize, Sequelize } = require("./src/models");
// sequelize.sync({ force: true });

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

module.exports = app;
