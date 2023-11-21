// import express from "express";
// import cors from "cors";
// import multer from "multer";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
// import path from "path";
// import mongoose from "mongoose";
// // import * as dotenv from 'dotenv';
// // dotenv.config();

// import authRoutes from "./api/routes/auths.js";
// import userRoutes from "./api/routes/users.js";
// import postRoutes from "./api/routes/posts.js";
// import commentRoutes from "./api/routes/comments.js";
// import likeRoutes from "./api/routes/likes.js";
// import messagesRoute from "./api/routes/messages.js";
// import friendRuotes from "./api/routes/friends.js";
// import productRuotes from "./api/routes/product.js";
const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors')

app.use(cors())

app.use("/", express.static(path.join(__dirname, "./dist")));
app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});
app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
})
const PORT = 4000
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});

// const app = express();

// //middlewares
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: ["http://localhost:5173",
//     "http://localhost:5174"
//   ]
//   })
// );
// app.use(cookieParser());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './src/assets/avatar')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })

// const upload = multer({ storage: storage })

// app.post('/i', upload.single('image'), (req, res) => {
//   res.send(req.file.filename)
// });

// const __dirname = path.resolve();

// app.use("/", express.static(path.join(__dirname, "./dist")));
// app.use("/", express.static(path.join(__dirname, "./src/pages/sma/dist")));

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);
// app.use("/api/messages", messagesRoute);
// app.use("/api/friends", friendRuotes);

// mongoose.connect(
//   process.env.MONGO_URL,
//   {
//       writeConcern: { w: 'majority' },
//   }
// );

// app.use('/products', productRuotes);
  
// app.get("/sma/*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "./src/pages/sma/dist", "index.html"));
// })

// app.get("/*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "./dist", "index.html"));
// })


// const hostname = '127.0.0.1';
// const port = 8000;

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// });

