import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import {
  getAllUser,
  userLogin,
  userRegister,
} from "../controller/user.controller.js";
import {
  teacherDetails,
  teacherNotes,
} from "../controller/teacher.controller.js";

const userRouter = Router();

userRouter.route("/Register").post(
  upload.fields([
    {
      name: "avtar",
      maxCount: 1,
    },
  ]),
  userRegister
);
//chat route
userRouter.route("/student").get(getAllUser);
userRouter.route("/Login").post(userLogin);

userRouter.route("/teachers").post(
  upload.fields([
    {
      name: "Files",
      maxCount: 4,
    },
  ]),
  teacherDetails
);
userRouter.route("/Dashboard").post(getAllUser);
userRouter.route("/Notes").post(teacherNotes);

export default userRouter;
