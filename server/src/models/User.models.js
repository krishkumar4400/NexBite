import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    avatar: {
      url: { type: String, localPath: String },
      default: "",
      localPath: "",
    },
    fullname: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      index: true,
      required: [true, "Username is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      index: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: {
      type: String,
    },
    emailVerificationTokenExpiry: {
      type: Date,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpiry: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["user", "admin", "owner", "rider"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

const userModel = model.User || model("User", userSchema);

export default userModel;
