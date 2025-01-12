const express = require("express");
const {
  sendEmail,
} = require("../controllers/emailController");
const router = express.Router();

// Email sending route
router.post("/send-email", sendEmail);

module.exports = router;
