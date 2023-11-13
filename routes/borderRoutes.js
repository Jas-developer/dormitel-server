const express = require("express");
const router = express.Router();
const { inputBorder, getBorders } = require("../controllers/borderController");

router.get("/", getBorders);
router.post("/", inputBorder);

module.exports = router;
