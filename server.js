const express = require("express");
const connectDB = require("./config/connectDB");
const todoRoute = require("./routes/todoRoute");
require("dotenv/config");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/todo", todoRoute);

app.get("/", (req, res) =>
  res.status(200).send("Welcome to Our todo list app")
);

const startServer = () => {
  connectDB();
  app.listen(port, () => console.log(`listening on ${port}`));
};

startServer();
