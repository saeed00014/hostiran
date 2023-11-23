const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors()
);
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "./dist")));
  
app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})

const port = 8000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
});

