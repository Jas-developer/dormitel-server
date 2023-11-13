const express = require("express");
const { connectDb } = require("../server/config/dbConnection");
const app = express();

const port = 5000;
connectDb();
app.use(express.json());

app.use("/borders", require("./routes/borderRoutes"));

app.listen(port, () => {
  console.log(`Your port is listing to ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
