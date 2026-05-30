import userModel from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { validationResult } from "express-validator";


const registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    throw new ApiError(400, "All fields are required", errors.array())
  }
  const { fullname, username, email, password, role } = req.body;

  const existedUser = await userModel.findOne({
    $or: [{username}, {email}],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists", []);
  }

  const hashedPassword = await userModel.hashPassword(password);
  const user = await userModel.create({
    fullname,
    username,
    email,
    password: hashedPassword,
    role,
  });

  const token = await user.generateAuthToken();
  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(201)
    .json({
      message: "User registered successfully",
      success: true,
    });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    throw new ApiError(401, "Please enter valid details");
  }
});


export { registerUser };