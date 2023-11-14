const router = require("express").Router();
const tableRouter = require("./tables.routes");
const bookingRouter = require("./booking.router");

router.use("/tables", tableRouter);
router.use("/booking",bookingRouter );

module.exports = router;
