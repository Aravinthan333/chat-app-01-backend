const express = require("express");
const router = express.Router();
const {
  getMessages,
  sendMessage,
} = require("../controllers/message.controller.js");
const protectRoute = require("../middleware/protectRoute.js");

router.get("/:id", getMessages);
router.post("/send/:id", sendMessage);

module.exports = router;
