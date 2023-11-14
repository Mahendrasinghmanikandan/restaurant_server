const Booking = require("../models/bookings.models");
const Tables = require("../models/tables.models");

const createBooking = async (req, res) => {
  try {
    await Booking.create(req.body);
    await Tables.findByIdAndUpdate(
      { _id: req.body.table_id },
      { status: true }
    );
    return res.status(200).send({ message: "Table Successfully Booked" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "something went wrong" });
  }
};

const getBooking = async (req, res) => {
  try {
    const data = await Booking.find();
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "something went wrong" });
  }
};

const updateBooking = async (req, res) => {
  try {
    if (req.body.status === "Canceled" || req.body.status === "Checkout") {
      await Tables.findByIdAndUpdate(
        { _id: req.body.table_id },
        { status: false }
      );
      await Booking.findByIdAndUpdate(
        { _id: req.body.id },
        { status: req.body.status }
      );
    } else {
      await Booking.findByIdAndUpdate(
        { _id: req.body.id },
        { status: req.body.status }
      );
    }
    
      return res.status(200).send({ message: "Status Successfully Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "something went wrong" });
  }
};

module.exports = { createBooking, getBooking, updateBooking };
