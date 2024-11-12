import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./router/user.routes.js";

// socket.io
import http from "http";
import { Server } from "socket.io";


const app = express();

// create a http server
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN, // URL of your React client
    methods: ["GET", "POST"],
    credentials: true // Allow credentials like cookies
  },
});

// Socket.io connection handling
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for incoming messages
  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message); // Broadcast the message to all users
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(4000, () => {
  console.log(`Server running on http://localhost:${4000}`);
});

//cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// express
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//cookie
app.use(cookieParser());

//server
app.use("/api/v1/user", userRouter);


export default app;
