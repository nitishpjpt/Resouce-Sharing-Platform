import { Teacher } from "../module/teacher.modal.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const teacherDetails = async (req, res) => {
  // get user details from req.body
  // check details are not empty
  // check file uploaded on clodinary or not
  // create a user object
  // then send response to the user

  const { title, description, semester } = req.body;

  if ([title, description, semester].some((field) => field?.trim() === "")) {
    throw new ApiError(401, "uploded details are empty");
  }

  //   let localUrlPath;
  //   if (
  //     req.files &&
  //     Array.isArray(req.files.fileUrl) &&
  //     req.files.fileUrl.length > 0
  //   ) {
  //     localUrlPath = req.files.fileUrl[0].path;
  // }

  // if (!req.files || !req.files.fileUrl || req.files.fileUrl.length === 0) {
  //   throw new ApiError(401, "No file uploaded");
  // }

  // const UrlLocalPath = await req.Files;
  // console.log(UrlLocalPath)

  let coverImageLocalPath;
  if (coverImageLocalPath = req.files.Files[0].filename) {

    console.log(coverImageLocalPath)
  }


  const Files = await coverImageLocalPath;
  if (!Files) {
    throw new ApiError(401, "File is not uploded on cloudinary");
  }

  const user = await Teacher.create({
    title,
    description,
    semester,
    Files:Files
  });

  if (!user) {
    throw new ApiError(401, "User does not created");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Teacher notes uploded successfully"));
};

const teacherNotes = async (req, res) => {
  const notes = await Teacher.find().lean();

  if (!notes) {
    throw new ApiError("notes does not found");
  }

  res.status(200).json(
    new ApiResponse(
      201,
      {
        notes,
      },
      "User notes Successfully found"
    )
  );
};

export { teacherDetails, teacherNotes };
