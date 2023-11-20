const mongoose = require("mongoose");

const { Schema } = mongoose;

const adminSchema = new Schema({
  email: {
    type: String,
    required: [true, " Email are required "],
  },
  password: {
    type: String,
    required: [true, "Password are required"],
  },
});

module.exports = mongoose.model("admin", adminSchema);
