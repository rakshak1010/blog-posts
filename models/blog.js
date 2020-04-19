const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    post: {
      type: String,
      required: true
    } ,
    createdAt: Date,
    updatedAt: Date
  },
  {
    id: true,
    timestamps: true,
    strict: false
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
