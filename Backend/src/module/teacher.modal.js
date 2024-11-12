import mongoose from "mongoose";

const teacherSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    semester: String,
    Files:String,
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
