const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/model.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  switch (pathName) {
    case "/":
      res.end("welcome to ur api");
    case "/products":
      res.end(data);
    default:
      res.end("this page doesnt exist");
  }
});

server.listen(8000, "127.0.0.1", () => console.log("listening on port 8000"));
