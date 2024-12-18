// "use client";
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

import dummyProject from "@/public/images/dummy_project.png";
import ReactHtmlParser from "react-html-parser";
import { Card } from "flowbite-react";
import "@/public/css/mycss.css";
import { connectToDatabase } from "@/lib/connectToDB";
import Blog from "@/models/blogModel";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BlogDetailsPage: FC<any> = async ({ params }) => {
  var blog;
  await connectToDatabase();
  try {
    var singleBlog = await Blog.findById(params.id).populate(
      "author",
      "name email"
    );
    // console.log(singleBlog);
    blog = singleBlog;
  } catch (error) {
    // console.log(error);
  }

  // console.log(blog);
  return (
    <div>
      <div className="inline-block">
        <Link
          href={"/blog"}
          className="uppercase font-bold text-md flex items-center"
        >
          <FaArrowLeft className="inline-block mr-3" /> Back to{" "}
          <span className="text-lime-500 inline-block ml-2">blog</span>
        </Link>
      </div>
      <Card className="rounded-3xl">
        <img
          src={blog?.blogCover || dummyProject}
          className="h-72 w-full rounded-3xl"
          alt={""}
        />
        <h1 className="font-bold my-10 text-2xl">{blog.blogTitle}</h1>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Category: {blog?.blogCategory || "[Category Missing]"}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Date: {new Date(blog.createdAt).toDateString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Author: {blog.author?.name}
          </p>
        </div>
        <div className="preview_editor_text">
          {ReactHtmlParser(
            blog.content
              ?.replaceAll("<h1", "<h1 class='text-2xl'")
              ?.replaceAll("<h2", "<h2 class='text-xl'")
              ?.replaceAll("<h3", "<h3 class='text-md'")
          )}
        </div>
      </Card>
    </div>
  );
};

export default BlogDetailsPage;
