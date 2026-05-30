import mongoose, { Schema } from "mongoose";

const blackListTokenSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '24h'
    }
}, {
    timestamps: true
});

const blackListTokenModel =
  mongoose.model.BlackListedToken || mongoose.model("BlackListedToken", blackListTokenSchema);

export default blackListTokenModel;