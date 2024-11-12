import app from "./app.js";
import connectDB from "./db/user.db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT);
    console.log(`Server is Working on localhost:${process.env.PORT}`);
  })
  .catch((error) => {
    console.log("Server is not working", error);
  });
