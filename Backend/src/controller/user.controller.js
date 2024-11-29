import { User } from "../module/user.models.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import uploadOnClodinary from "../utils/Cloudinary.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error while generating access and refresh token");
  }
};

const userRegister = async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const { username, email, password } = req.body;
  let {role} = req.body;
  if(role==''){
    role = "Student";
  }

  // Check if data is not empty
  if ([username, email, password, role].some((field) => field?.trim() === "")) {
    throw new ApiError(409, "User details are empty");
  }

  // Check if user already exists
  const existUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existUser) {
    throw new ApiError(400, "This username or email already exists");
  }

  // const avatarLocalPath = req.files?.avatar[0]?.path;

  // let coverImageLocalPath;
  // if (
  //   req.files &&
  //   Array.isArray(req.files.avtar) &&
  //   req.files.avtar.length > 0
  // ) {
  //   coverImageLocalPath = req.files.avtar[0].path;
  // }

  // const avtar = await uploadOnClodinary(coverImageLocalPath);
  // // if you can does not register user without the avtar
  // if (!avtar) {
  //   throw new ApiError(400, "Avatar is required on Cloudinary");
  // }

  // Create a user object
  const user = await User.create({
    username,
    email,
    password,
    role,
    // avtar: avtar?.url || "",
  });

  if (!user) {
    throw new ApiError(400, "User was not created");
  }

  // Remove the refreshToken and password from the user object
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(400, "User was not created");
  }

  res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
};

const userLogin = async (req, res) => {
  // get user details from req.body
  // check if user login with email or username
  // check if user already exist
  // check if user password is corect or not
  // access and refresh token
  // then return response

  const { email, password } = req.body;

  if ([email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(401, "Login details are empty");
  }

  const user = await User.findOne({
    $or: [{ email }],
  });

  if (!user) {
    throw new ApiError(401, "User does not exist");
  }

  const correctPassword = user.isPasswordCorrect(password);

  if (!correctPassword) {
    throw new ApiError(401, "You entered wrong password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User loggin Successfully"
      )
    );
};

const getAllUser = async (req, res) => {
  const user = await User.find().lean();

  if (!user) {
    throw new ApiError(401, "User data does not get");
  }

  res.status(200).json(
    new ApiResponse(
      201,
      {
        user,
      },
      "all registered user"
    )
  );
};

export { userRegister, userLogin, getAllUser };
