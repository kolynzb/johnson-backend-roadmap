const express = require("express");
const route = express.Router();
const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/model.json`, "utf-8");
const dataObject = JSON.parse(data);

route.get("/", (req, res) => {
  res.status(200).send(dataObject);
});

module.exports = route;
