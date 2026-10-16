const express = require("express");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";

const server = express();

server.use(express.static(path.join(__dirname, "out")));

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3000");
});
