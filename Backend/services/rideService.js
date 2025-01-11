const rideModel = require("../models/rideModel");
const mapsService = require("../services/mapsService");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!destination || !pickup) {
    throw new Error("Pickup and destination are required");
  }
  const distanceTime = await mapsService.getDistanceTime(pickup, destination);
  const baseFare = {
    auto: 30,
    car: 50,
    motorcycle: 20,
  };
  const perKmRate = {
    auto: 10,
    car: 15,
    motorcycle: 8,
  };
  const perMinuteRate = {
    auto: 2,
    car: 3,
    motorcycle: 1.5,
  };
  const fare = {
    auto:
      baseFare.auto +
      (distanceTime.distance && distanceTime.distance.value
        ? distanceTime.distance.value
        : 0) *
        perKmRate.auto +
      (distanceTime.duration && distanceTime.duration.value
        ? distanceTime.duration.value
        : 0) *
        perMinuteRate.auto,
    car:
      baseFare.car +
      (distanceTime.distance && distanceTime.distance.value
        ? distanceTime.distance.value
        : 0) *
        perKmRate.car +
      (distanceTime.duration && distanceTime.duration.value
        ? distanceTime.duration.value
        : 0) *
        perMinuteRate.car,
    motorcycle:
      baseFare.motorcycle +
      (distanceTime.distance && distanceTime.distance.value
        ? distanceTime.distance.value
        : 0) *
        perKmRate.motorcycle +
      (distanceTime.duration && distanceTime.duration.value
        ? distanceTime.duration.value
        : 0) *
        perMinuteRate.motorcycle,
  };

  return fare;
}

function getOTP(num) {
  function generateOTP(num) {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateOTP(num);
}

module.exports.createRide = async ({
  pickup,
  destination,
  user,
  vehicleType,
}) => {
  if (!pickup || !destination || !user || !vehicleType) {
    throw new Error("All fields are required");
  }
  const fare = await getFare(pickup, destination);
  const ride = await rideModel.create({
    pickup,
    user,
    destination,
    otp: getOTP(6),
    fare: fare[vehicleType],
  });
  return ride;
};
