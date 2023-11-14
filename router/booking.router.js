const { createBooking, getBooking, updateBooking } = require("../controller/booking.controller");

const router = require("express").Router();

router.post("/add_booking", createBooking);
router.get("/get_bookings", getBooking);
router.put("/update_bookings", updateBooking);

module.exports = router;
