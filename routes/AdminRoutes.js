const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAdmins,
  signInAdmin,
} = require("../controllers/adminController");

router.post("/", createAdmin);
router.get("/", getAdmins);
router.post("/signin", signInAdmin);

module.exports = router;
