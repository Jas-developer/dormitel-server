const express = require("express");
const router = express.Router();
const {
  inputBorder,
  getBorders,
  getboarder,
  deleteBoarder,
  updateBoarder,
} = require("../controllers/borderController");

router.get("/", getBorders);
router.post("/", inputBorder);
router.get("/:id", getboarder);
router.delete("/:id", deleteBoarder);
router.put("/:id", updateBoarder);

module.exports = router;
