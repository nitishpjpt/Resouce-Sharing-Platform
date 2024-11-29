import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      unique: true,
    },
    avtar: {
      type: String,
      required: true,
    },
    role: {
      type:String,
      enum:['student','teacher'],
      required:true
     },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//function to bcrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

// function to compare the password

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// function to create a user refresh token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      password: this.password,
    },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: process.env.USER_EXPIRE_TOKEN,
    }
  );
};
// function to create a  refresh token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.USER_REFRESH_TOKEN,
    {
      expiresIn: process.env.REFRESH_EXPIRE_TOKEN,
    }
  );
};

export const User = mongoose.model("User", userSchema);
