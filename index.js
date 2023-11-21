const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();


const authRoutes = require("./api/routes/auths.js");
const userRoutes = require("./api/routes/users.js");
const postRoutes = require("./api/routes/posts.js");
const commentRoutes = require("./api/routes/comments.js");
const likeRoutes = require("./api/routes/likes.js");
const messagesRoute = require("./api/routes/messages.js");
const friendRuotes = require("./api/routes/friends.js");
const productRuotes = require("./api/routes/product.js");
// const express = require("express");
// const path = require("path");
// const app = express();
// const cors = require('cors')

// app.use(cors())

// app.use("/", express.static(path.join(__dirname, "./dist")));
// app.get("/api/v1", (req, res) => {
//   res.json({
//     project: "React and Express Boilerplate",
//     from: "Vanaldito",
//   });
// });
// app.get("/*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "./dist", "index.html"));
// })
// const PORT = 4000
// app.listen(PORT, () => {
//   console.log();
//   console.log(`  App running in port ${PORT}`);
//   console.log();
//   console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
// });

const app = express();

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["*"]
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/assets/avatar')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/i', upload.single('image'), (req, res) => {
  res.send(req.file.filename)
});

app.use("/", express.static(path.join(__dirname, "./dist")));
app.use("/", express.static(path.join(__dirname, "./src/pages/sma/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/messages", messagesRoute);
app.use("/api/friends", friendRuotes);

mongoose.connect(
  process.env.MONGO_URL,
  {
      writeConcern: { w: 'majority' },
  }
);

app.use('/products', productRuotes);
  
app.get("/sma/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/sma/dist", "index.html"));
})

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})


const hostname = '127.0.0.1';
const port = 8000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
});

