import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { url } from "node:inspector";

const userSchema = new Schema({
  avatar: {
    type: {
      url: String,
      localPath: String,
    },
    default: {
      url: `https://placehold.co/400x400`,
      localPath: ''
    },
  },
  username: {
    type: String,
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isEmailverified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["user", "admin", "rider", "owner"],
    default: "user",
  },
  emailverificationToken: {
    type: String,
    default: "",
  },
  emailverificationTokenExpiry: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: {
    type: String,
    default: "",
  },
  resetPasswordTokenExpiry: {
    type: Date,
    default: Date.now,
  },
  refreshToken: {
    type: String,
    default: ''
  }
});

// pre hooks
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = async function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.AUTH_TOKEN_EXPIRY,
  });
};

const userModel = mongoose.model.User || mongoose.model("User", userSchema);
export default userModel;