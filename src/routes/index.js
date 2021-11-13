var express = require("express");
var router = express.Router();
const classRouter = require("../controllers/classes/routes");
const materialRouter = require("../controllers/materials/routes");
const scheduleRouter = require("../controllers/schedules/routes");
const userRouter = require("../controllers/users/routes");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.use("/class", classRouter);
router.use("/material", materialRouter);
router.use("/schedule", scheduleRouter);
router.use("/user", userRouter);
module.exports = router;
