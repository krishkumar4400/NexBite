import userModel from "../models/User.models.js";
import { validationResult } from "express-validator";

const registerUser = async function (req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
      success: false,
    });
  }
  try {
    const { username, email, password, role } = req.body;

    let user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      return res.status(409).json({
        message: "User with this username or email already exists",
        success: false,
      });
    }

    const hashedPassword = await userModel.hashPassword(password);
    user = await userModel.create({
      username,
      email,
      role,
      password: hashedPassword,
    });

    const token = await user.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const loginUser = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
      success: false,
    });
  }
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email id or password",
        success: false,
      });
    }

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "incorrect email or password",
        success: false,
      });
    }

    const token = await user.generateAuthToken();

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "You are logged in",
        success: false,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const getUserData = async function (req, res) {
  if(!req.user) {
    return res.status(401).json({
      message: "Unauthorized access",
      success: false 
    });
  }
  return res.status(200).json({
    user: req.user,
    success: true
  });
};

export { registerUser, loginUser, getUserData };
