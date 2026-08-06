import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: {
        type: Number,
      },
    },
  ],
}, { timestamps: true });

const urlModel = mongoose.model("urlModel", urlSchema);

export default urlModel;