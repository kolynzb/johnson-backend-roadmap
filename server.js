const express = require("express");
const connectDB = require("./config/connectDB");
const port = process.env.PORT || 5000;
require("dotenv/config");

const app = express();

const startServer = () => {
  connectDB();
  app.listen(port, () => console.log(`listening on ${port}`));
};

startServer();
