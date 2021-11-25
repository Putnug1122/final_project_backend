var express = require("express");
var router = express.Router();
const userRouter = require("../controllers/users/routes");
const classRouter = require("../controllers/classes/routes");
const materialRouter = require("../controllers/materials/routes");
const scheduleRouter = require("../controllers/schedules/routes");
const joinClassesRouter = require("../controllers/joinclasses/routes");
router.use("/user", userRouter);
router.use("/class", classRouter);
router.use("/material", materialRouter);
router.use("/schedule", scheduleRouter);
router.use("/join", joinClassesRouter);

module.exports = router;
