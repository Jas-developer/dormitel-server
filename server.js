const express = require("express");
const { connectDb } = require("../server/config/dbConnection");
const app = express();
// cors
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(cors());

const port = 5000;
connectDb();
app.use(express.json());

app.use("/borders", require("./routes/borderRoutes"));
//@for admin
app.use("/admin", require("./routes/AdminRoutes"));

app.listen(port, () => {
  console.log(`Your port is listing to ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
