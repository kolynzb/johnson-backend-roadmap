const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("Error connecting: ", err.message));
};

module.exports = connectDB;
