// models/Blog.ts
import mongoose, { Document, Schema } from "mongoose";

// Define the Blog interface
interface IBlog extends Document {
  blogTitle: string;
  blogCategory: string;
  blogCover: string;
  content: string;
  author: any; // Reference to User model
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    blogTitle: { type: String, required: true },
    blogCategory: { type: String, required: true },
    blogCover: { type: String, required: true }, // Store image URL or file path
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
