import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    short_desc: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
    user: { type: Schema.Types.ObjectId, ref: "UserModel" },
  },
  {
    timestamps: true,
  }
);

export const BlogModel = model("BlogModel", blogSchema);
