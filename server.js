const express = require("express");
const productsRoute = require("./routes/productsRoute");

//initialing an express app
const app = express();

app.use("/products", productsRoute);

app.get("/", (req, res) => {
  res.status(200).send("welcome to ur api");
});

app.listen(8000, () => console.log("listenng on port 8000"));
