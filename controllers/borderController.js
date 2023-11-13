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
    res.json({
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

    res.status(201).json({
      monthly: border.monthly_amount_due,
      date_started: border.date_started,
      name: border.name,
    });
  }

  res.json({ message: "Register the user" });
});

// get request
const getBorders = asyncHandler(async (req, res) => {
  const borders = await Borders.find();
  if (!borders) {
    res.status(400);
  }

  res.status(200).json(borders);
});

module.exports = { inputBorder, getBorders };
