const asyncHandler = require("express-async-handler");
const Borders = require("../models/bordersModel");

// post request
const inputBorder = asyncHandler(async (req, res) => {
  const {
    name,
    room_number,
    monthly_due_date,
    date_started,
    monthly_amount_due,
  } = req.body;

  if (
    !name ||
    !room_number ||
    !monthly_due_date ||
    !date_started ||
    !monthly_amount_due
  ) {
    res.json({
      error: "All fields are required",
      status: 400,
    });
  }

  const roomAvailable = await Borders.findOne({ room_number });

  if (roomAvailable) {
    res.status(400).json({
      error: "Room is already occupied",
      status: 400,
    });
  } else {
    const border = await Borders.create({
      name,
      room_number,
      monthly_due_date,
      date_started,
      monthly_amount_due,
    });
    res.setHeader("Content-Type", "application/json");
    res.status(201).json({
      monthly: border.monthly_amount_due,
      date_started: border.date_started,
      name: border.name,
    });
  }

  res.json({ message: "Register the user" });
});

// get all the boarders
const getBorders = asyncHandler(async (req, res) => {
  const borders = await Borders.find();
  if (!borders) {
    res.status(400);
  }

  res.status(200).json(borders);
});

// get a single boarder
const getboarder = asyncHandler(async (req, res) => {
  const boarder = await Borders.findById(req.params.id);
  if (!boarder) {
    res.json({ error: "Contact not found" });
    throw new Error("Boarder not found");
  }
  res.status(201).json(boarder);
});

// editing/updating the boarder record
const updateBoarder = asyncHandler(async (req, res) => {
  const boarder = await Borders.findById(req.params.id);

  if (!boarder) {
    return res.status(404).json({ message: "Boarder Not Found!" });
  }

  const updatedBoarder = await Borders.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedBoarder) {
    return res.status(500).json({ message: "Failed to update Boarder" });
  }

  res.json(updatedBoarder);
});

// delete a single border
const deleteBoarder = asyncHandler(async (req, res) => {
  const boarder = await Borders.findById(req.params.id);
  if (!boarder) {
    console.log("Boarder not found");
    throw new Error("Boarder not found");
  }

  await Borders.findByIdAndDelete(req.params.id);

  res.status(200).json(boarder);
});

module.exports = {
  inputBorder,
  getBorders,
  deleteBoarder,
  updateBoarder,
  getboarder,
};
