const express = require("express");
const router = express.Router();
const {
  getMessages,
  sendMessage,
} = require("../controllers/message.controller.js");
const protectRoute = require("../middleware/protectRoute.js");

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
