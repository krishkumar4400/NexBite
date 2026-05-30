import { Router } from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post(
  "/register",
  [
    body("fullname")
      .notEmpty()
      .withMessage("Fullname is required")
      .isString("Fullname must be in text")
      .isLength({ min: 3 })
      .withMessage("Fullname must be atleast 3 characters long"),
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username must be atleast 3 characters long"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is not valid"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  registerUser,
);

export default userRouter;
