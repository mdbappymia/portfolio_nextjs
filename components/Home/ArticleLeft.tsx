import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ArticleLeft = () => {
  return (
    <Card className="rounded-3xl pb-1">
      <div>
        <h1 className="text-2xl font-bold">
          Article & <br />
          <span className="inline-block ml-5">Publications</span>
        </h1>
      </div>
      <Link href={"/blog"}>
        <div className="flex justify-between mx-5 font-bold hover:text-lime-500 mt-5 text-xl">
          <h1>Blogs</h1>
          <FaArrowUpRightFromSquare />
        </div>
      </Link>
    </Card>
  );
};

export default ArticleLeft;
