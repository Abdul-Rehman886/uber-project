// const mapsService = require("../services/mapsService");
// const { validationResult } = require("express-validator");

// module.exports.getAddressCoordinate = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { address } = req.query;
//   console.log(address);
//   try {
//     const coordinates = await mapsService.getAddressCoordinate(address);
//     res.status(200).json(coordinates);
//   } catch (error) {
//     res.status(404).json({ message: "Coordinates not found" });
//   }
// };

const mapsService = require("../services/mapsService");
const { validationResult } = require("express-validator");

module.exports.getAddressCoordinate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  console.log("Address received:", address);

  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    console.error("Error in getAddressCoordinate:", error.message);
    res
      .status(404)
      .json({ message: "Coordinates not found", error: error.message });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { origin, destination } = req.query;
    const distanceTime = await mapsService.getDistanceTime(origin, destination);
    res.status(200).json(distanceTime);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { input } = req.query;
    const suggestions = await mapsService.getAutoCompleteSuggestions(input);
    res.status(200).json(suggestions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
