import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./router/user.routes.js";

const app = express();

//cors
const corsOptions = {
  origin: 'https://resouce-sharing-platform-frontend.vercel.app',  // Allow frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // If needed, depending on your authentication method
};
// Use CORS middleware with options
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
