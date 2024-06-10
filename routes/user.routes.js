const express = require("express");
const getUsersForSidebar = require("../controllers/user.controller");
const protectRoute = require("../middleware/protectRoute.js");

const router = express.Router();

router.get("/", getUsersForSidebar);

module.exports = router;
