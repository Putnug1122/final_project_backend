var express = require("express");
var router = express.Router();
const userRouter = require("../controllers/users/routes");
const registerRoutes = require("../controllers/users/register/routes");
const loginRoutes = require("../controllers/users/login/routes");
const classRouter = require("../controllers/classes/routes");
const materialRouter = require("../controllers/materials/routes");
const scheduleRouter = require("../controllers/schedules/routes");
const joinClassesRouter = require("../controllers/joinclasses/routes");
const presenceRouter = require("../controllers/presences/routes");

router.use("/user", userRouter);
router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/class", classRouter);
router.use("/material", materialRouter);
router.use("/schedule", scheduleRouter);
router.use("/join", joinClassesRouter);
router.use("/presence", presenceRouter);

module.exports = router;
