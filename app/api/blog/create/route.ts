// pages/api/blog/create.ts
import type { NextApiRequest, NextApiResponse } from "next";
import UserModel from "@/models/userModel";
import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/connectToDB";
import formidable, { Fields, Files } from "formidable";
import fileUileUpload from "@/lib/functions/fileUpload";
import path from "path";

// Disable Next.js's default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Function to parse FormData using formidable
const parseForm = (
  req: NextApiRequest
): Promise<{ fields: Fields; files: Files }> => {
  const form = formidable({ multiples: true });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export async function POST(req: any, res: NextApiResponse) {
  await connectToDatabase();

  try {
    const Formdata = await req.formData();
    const blogTitle = Formdata.get("blogTitle");
    const blogCategory = Formdata.get("blogCategory");
    const blogCover = Formdata.get("blogCover");
    const content = Formdata.get("content");
    const author = Formdata.get("author");

    // Ensure that the user exists
    console.log(author);
    const user = await UserModel.findById(author);
    if (!user) {
      return NextResponse.json(
        { message: "Author not found" },
        { status: 400 }
      );
    }
    console.log(blogCover);
    const uploadDir = "public/uploads/";
    const blogCoverLink = await fileUileUpload(blogCover, uploadDir);
    console.log(blogCoverLink);
    const newBlog = new Blog({
      blogTitle,
      blogCategory,
      blogCover: blogCoverLink.replaceAll("\\", "/"),
      content,
      author,
    });

    const result = await newBlog.save();
    console.log(result);
    return NextResponse.json(
      { message: "Blog created successfully", blog: "newBlog" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
}
