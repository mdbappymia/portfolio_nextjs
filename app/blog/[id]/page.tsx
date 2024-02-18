/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import blogs from "@/public/data/blogs.json";
import dummyProject from "@/public/images/dummy_project.png";
import ReactHtmlParser from "react-html-parser";
import { Card } from "flowbite-react";

const BlogDetailsPage: FC<any> = ({ params }) => {
  //   console.log(params);
  const displayBlog: any = blogs.find((blg) => blg._id === params.id);
  return (
    <Card className="rounded-3xl">
      <img
        src={displayBlog.img || dummyProject}
        className="h-64 w-full rounded-3xl"
        alt={""}
      />
      <h1 className="font-bold my-10 text-2xl">{displayBlog.title}</h1>
      <div>{ReactHtmlParser(displayBlog.description)}</div>
    </Card>
  );
};

export default BlogDetailsPage;
