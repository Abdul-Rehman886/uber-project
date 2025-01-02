const captainModel = require("../models/captianModel");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !password ||
    !email ||
    !plate ||
    !capacity ||
    !vehicleType ||
    !color
  ) {
    throw new Error("All fields are required");
  }
  const captain = captainModel.create({
    fullname: { firstname, lastname },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });
  return captain;
};
