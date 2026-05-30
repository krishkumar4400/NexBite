import jwt from "jsonwebtoken";
import userModel from "../models/User.models.js";

export const authMiddleware = async function (req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      message: "You are not logged in",
      success: false,
    });
  }

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(userId);
    req.user = user;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
