import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./router/user.routes.js";

const app = express();

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://resouce-sharing-platform-3cd5.vercel.app'], // Add frontend URLs here
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies if necessary
};

// Enable CORS
app.use(cors(corsOptions));

// express
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//cookie
app.use(cookieParser());

//server
app.use("/api/v1/user", userRouter);

export default app;
