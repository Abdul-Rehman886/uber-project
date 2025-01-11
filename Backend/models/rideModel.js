const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  pickup: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  destination: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Canceled", "Completed", "Ongoing"],

    default: "Pending",
  },
  captain: {
    type: String,

    ref: "Captain",
  },

  fare: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  paymentId: {
    type: String,
  },
  orderId: {
    type: String,
  },
  signature: {
    type: String,
  },
  otp: {
    type: String,
    select: false,
    required: true,
  },
});

module.exports = mongoose.model("ride", rideSchema);
