const express = require("express");
const mapsController = require("../controllers/mapsController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { query } = require("express-validator");

router.get(
  "/get-coordinates",

  query("address").isString().isLength({ min: 3 }),

  authMiddleware.authUser,
  mapsController.getAddressCoordinate
);

router.get(
  "/get-distance-time",

  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),

  authMiddleware.authUser,
  mapsController.getDistanceTime
);

router.get(
  "/get-suggestions",

  query("input").isString().isLength({ min: 3 }),

  authMiddleware.authUser,
  mapsController.getAutoCompleteSuggestions
);

module.exports = router;
