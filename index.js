const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path')
require("dotenv").config();
const http = require('http').Server(express);

const authRoutes = require("./api/routes/auths.js");
const userRoutes = require("./api/routes/users.js");
const postRoutes = require("./api/routes/posts.js");
const commentRoutes = require("./api/routes/comments.js");
const likeRoutes = require("./api/routes/likes.js");
const messagesRoute = require("./api/routes/messages.js");
const friendRuotes = require("./api/routes/friends.js");
const productRuotes = require("./api/routes/product.js");

const app = express();

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Origin');
  next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "./src/pages/sma/assets")))
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/pages/sma/assets/avatar')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })
app.post('/i', upload.single('image'), (req, res) => {
  res.send(req.file.filename)
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/messages", messagesRoute);
app.use("/api/friends", friendRuotes);

// app.use('/api/products', productRuotes);
app.use("/", express.static(path.join(__dirname, "./dist")));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})

const port = 8000;

// mongoose.connect(
//   'mongodb+srv://saeed00014:amiralim890@cluster0.79q6syx.mongodb.net/?retryWrites=true&w=majority',
//   {
//     writeConcern: { w: 'majority' },
//   }
// );
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
});

