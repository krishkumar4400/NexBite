import { Router } from "express";
import {
  getUserData,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controllers.js";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import {
  loginRequestValidator,
  registerRequestValidator,
} from "../validations/request.validations.js";

const userRouter = Router();

userRouter.post("/register", registerRequestValidator, registerUser);

userRouter.post("/login", loginRequestValidator, loginUser);

userRouter.get("/profile", authMiddleware, getUserData);
userRouter.post("/logout", authMiddleware, logoutUser);

export default userRouter;
