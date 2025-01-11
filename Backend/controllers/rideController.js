const rideService = require("../services/rideService");
const { validationResult } = require("express-validator");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, userId, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({
      pickup,
      destination,
      user: req.user._id,
      vehicleType,
    });
    res.status(201).json(ride);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
