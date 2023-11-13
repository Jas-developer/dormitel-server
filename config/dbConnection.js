const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://softwareengineer23:softwareengineer23@cluster0.sa2sdwq.mongodb.net/dormitel?retryWrites=true&w=majority"
    );
    console.log(
      "Database Connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectDb };
