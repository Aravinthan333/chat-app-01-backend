// const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");

const connectToMongoDB = require("./db/connectToMongoDB.js");
const { app, server } = require("./socket/socket.js");

require("dotenv").config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

// const __dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});

// ----------------------------------------------------------------

// const app = express();

// app.use(express.json());
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Chat App Working.........");
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// PORT = process.env.PORT || 4001;

// app.listen(PORT, () => {
//   connectToMongoDB();
//   console.log("server is running at port ", PORT);
// });
