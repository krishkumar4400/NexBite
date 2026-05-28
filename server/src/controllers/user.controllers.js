import userModel from "../models/user.models.js";
import { ApiError } from "../utils/api-error";
import { asyncHandler } from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, username, email, password, role } = req.body;

  const existedUser = await userModel.findOne({
    $or: [username, email],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists", []);
  }
  const user = await userModel.create({
    fullname,
    username,
    email,
    password,
    role,
  });

  await user.save();
});

const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body;
    if(!email) {
        throw new ApiError(400, "Email is required");
    }

    const user = await userModel.findOne({
        email
    });

    if(!user) {
        throw new ApiError(401, "Please enter valid details");
    }
});