const express = require("express");
const { connectDb } = require("./config/dbConnection");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());

// Routes
app.use("/borders", require("./routes/borderRoutes"));
app.use("/admin", require("./routes/AdminRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Your server is listening on port ${port}`);
  });
});
