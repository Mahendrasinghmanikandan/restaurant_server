const mongoose = require("mongoose");

const restaurantTableSchema = new mongoose.Schema(
  {
    table_name: String,
    table_pic: String,
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tables", restaurantTableSchema);
