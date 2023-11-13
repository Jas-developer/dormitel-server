const mongoose = require("mongoose");

const { Schema } = mongoose;

const bordersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the border's name"],
    },
    room_number: {
      type: String,
      required: [true, "Please add the room number"],
    },
    monthly_due_date: {
      type: String,
      required: [true, "Please add the due date"],
    },
    date_started: {
      type: String,
      required: [true, "Pleasea add the date started"],
    },
    monthly_amount_due: {
      type: String,
      required: [true, "Please add the amount due"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Border", bordersSchema);
