const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// creating a new admin account
const createAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    return res.status(400).json({ error: "Email is already in use" });
  } else {
    const newAdmin = await Admin.create({
      email,
      password,
    });

    res.status(201).json(newAdmin);
  }
});

//get all admins
const getAdmins = asyncHandler(async (req, res) => {
  const admin = await Admin.find();
  if (!admin) {
    throw new Error("Admin not found");
  }

  res.status(200).json(admin);
});

//signing in an admin
const signInAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const ifAdmin = await Admin.findOne({ email });
  if (ifAdmin && ifAdmin.password === password) {
    res
      .status(200)
      .json({ message: "Login successfuly", email: email, password: password });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = { createAdmin, getAdmins, signInAdmin };
