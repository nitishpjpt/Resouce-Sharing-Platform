import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./router/user.routes.js";

const app = express();

//cors
app.use(
  cors({
    origin: ["https://resouce-sharing-platform-frontend.vercel.app/"],
    methods:["POST","GET","PUT","DELETE"],
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
