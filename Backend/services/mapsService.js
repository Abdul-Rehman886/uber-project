// const axios = require("axios");

// module.exports.getAddressCoordinate = async (address) => {
//   const apiKey = process.env.GOOGLE_MAPS_API;
//   //   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//   //     address
//   //   )}&key=${apiKey}`;

//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//     address
//   )}&key=${apiKey}`;

//   try {
//     const response = await axios.get(url);
//     if (response.data.status === "OK") {
//       const location = response.data.results[0].geometry.location;
//       return {
//         lat: location.lat,
//         lng: location.lng,
//       };
//     } else {
//       throw new Error("Failed to get address coordinate.");
//     }
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to get address coordinate.");
//   }
// };

const { triggerAsyncId } = require("async_hooks");
const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    // Check if the status code is 200 and that we have results
    if (response.data.status.code === 200 && response.data.total_results > 0) {
      // Sort results by confidence (higher confidence comes first)
      const bestResult = response.data.results.sort(
        (a, b) => b.confidence - a.confidence
      )[0];

      // Log the full response and the best result to debug
      console.log("OpenCage Response:", response.data);
      console.log("Best Result:", bestResult);

      // Ensure geometry exists and access lat/lng directly
      if (
        bestResult.geometry &&
        bestResult.geometry.lat &&
        bestResult.geometry.lng
      ) {
        return {
          lat: bestResult.geometry.lat,
          lng: bestResult.geometry.lng,
        };
      } else {
        throw new Error(
          "Geometry or location data is missing for the best result."
        );
      }
    } else {
      throw new Error(`No results found for address: ${address}`);
    }
  } catch (error) {
    console.log("Error fetching coordinates:", error.message);
    throw new Error("Failed to get address coordinate.");
  }
};

// module.exports.getDistanceTime = async (origin, destination) => {
//   if (!origin || !destination) {
//     throw new Error("Both origin and destination addresses are required");
//   }
//   const apiKey = process.env.OPENCAGE_API_KEY;

//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//     origin
//   )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

//   try {
//     const response = await axios.get(url);

//     if (response.data.status === "OK") {
//       if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
//         throw new Error("No results found for either address.");
//       }
//       return response.data.rows[0].elements[0];
//     } else {
//       throw new Error("Failed to get distance and time data.");
//     }
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Both origin and destination addresses are required");
  }

  const apiKey = process.env.OPENCAGE_API_KEY;

  // Geocode the origin address
  const originUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    origin
  )}&key=${apiKey}`;

  // Geocode the destination address
  const destinationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    destination
  )}&key=${apiKey}`;

  try {
    const [originResponse, destinationResponse] = await Promise.all([
      axios.get(originUrl),
      axios.get(destinationUrl),
    ]);

    console.log("Origin Response:", originResponse.data);
    console.log("Destination Response:", destinationResponse.data);

    // Check if the origin and destination have high enough confidence
    const originCoordinates = originResponse.data.results[0]?.geometry;
    const destinationCoordinates =
      destinationResponse.data.results[0]?.geometry;
    const originConfidence = originResponse.data.results[0]?.confidence;
    const destinationConfidence =
      destinationResponse.data.results[0]?.confidence;

    if (!originCoordinates || !destinationCoordinates) {
      throw new Error(
        "Could not extract coordinates for one or both addresses."
      );
    }

    // If confidence is too low for either address, throw an error
    if (originConfidence < 5 || destinationConfidence < 5) {
      throw new Error("One or both addresses have low geocoding confidence.");
    }

    // Successfully geocoded both addresses
    return {
      origin: originCoordinates,
      destination: destinationCoordinates,
    };
  } catch (error) {
    console.error("Error in geocoding:", error);
    throw new Error("Failed to get distance and time data.");
  }
};

// module.exports.getAutoCompleteSuggestions = async (input) => {
//   if (!input) {
//     throw new Error("Query is required");
//   }
//   const apiKey = process.env.OPENCAGE_API_KEY;
//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//     input
//   )}&key=${apiKey}`;
//   try {
//     const response = await axios.get(url);
//     if (response.data.status === "OK") {
//       return response.data.predictions;
//     } else {
//       throw new Error("Failed to get autocomplete suggestions.");
//     }
//   } catch (error) {
//     console.error("Error in autocomplete:", error);
//     throw new Error("Failed to get autocomplete suggestions.");
//   }
// };

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("Query is required");
  }
  const apiKey = process.env.OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    // Check if the response status is OK
    if (response.data.status.code === 200) {
      // OpenCage uses `results` instead of `predictions`
      return response.data.results;
    } else {
      throw new Error("Failed to get autocomplete suggestions.");
    }
  } catch (error) {
    console.error(
      "Error in autocomplete:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to get autocomplete suggestions.");
  }
};
