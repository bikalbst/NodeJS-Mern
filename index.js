const http = require("http");
const fs = require("fs");
const { isUtf8 } = require("buffer");

const data = { age: 5 };

const index = fs.readFileSync("index.html", "utf-8");
const dataApi = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/data":
      res.setHeader("Content-Type", "application/json");
      res.end(dataApi);
      break;
    default:
      res.statusCode = 404;
      res.end();
  }

  console.log("Someone connected to the server");
});

server.listen(8080);
