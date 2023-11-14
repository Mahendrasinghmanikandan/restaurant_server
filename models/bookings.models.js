const mongoose = require("mongoose");

const bookingTableSchema = new mongoose.Schema(
  {
    table_name: String,
    table_id: String,
    customer_name: String,
    contact: Number,
    status: {
      type: String,
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bookings", bookingTableSchema);
