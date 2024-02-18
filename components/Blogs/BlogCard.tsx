import { Card } from "flowbite-react";
import Link from "next/link";
import React, { FC } from "react";
import ReactHtmlParser from "react-html-parser";

const BlogCard: FC<any> = ({ blog }) => {
  return (
    <Card
      className="max-w-sm h-full rounded-3xl overflow-hidden"
      imgSrc={blog.img}
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {ReactHtmlParser(blog.short_desc.slice(0, 80))}...{" "}
        <Link
          className="text-lime-500 hover:text-lime-600 hover:underline"
          href={`/blog/${blog._id}`}
        >
          See more
        </Link>
      </p>
    </Card>
  );
};

export default BlogCard;
