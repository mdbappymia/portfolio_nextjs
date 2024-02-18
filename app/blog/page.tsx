"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import blogs from "@/public/data/blogs.json";
import BlogCard from "@/components/Blogs/BlogCard";
import { Button } from "flowbite-react";
import catagories from "@/public/data/blog_catagory.json";

const BlogPage = () => {
  const [page, setPage] = useState<any>(1);
  const [hiddenBtn, setHiddenBtn] = useState<boolean>(false);
  const [catagory, setCatagory] = useState<any>(
    sessionStorage.getItem("catagory") || "all"
  );
  const [displayBlog, setDisplayBlog] = useState<any>([]);

  useEffect(() => {
    setDisplayBlog(blogs.slice(0, page * 4));
    if (catagory === "all" || catagory === "") {
      setDisplayBlog(blogs.slice(0, page * 4));
    } else {
      const filterBlogs = blogs.filter((blg: any) => blg.catagory === catagory);
      setDisplayBlog(() => filterBlogs);
    }
  }, [catagory, page]);
  const handleLoadMore = () => {
    if (page * 4 > blogs.length) {
      setHiddenBtn(true);
      return;
    } else {
      setPage(() => page + 1);
    }
  };
  const handleCatagory = (ctg: string) => {
    sessionStorage.setItem("catagory", ctg);
    setCatagory(() => ctg);
  };
  return (
    <div>
      <div className="inline-block">
        <Link
          href={"/"}
          className="uppercase font-bold text-md flex items-center"
        >
          <FaArrowLeft className="inline-block mr-3" /> Back to{" "}
          <span className="text-lime-500 inline-block ml-2">home</span>
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-3">
          <div className="ml-3 mt-5">
            <h1 className="my-4 text-2xl">All Catagories</h1>
            <div>
              <li
                className={`hover:text-lime-600 underline hover:cursor-pointer ${
                  catagory === "all" || catagory === ""
                    ? "text-lime-600 underline"
                    : ""
                }`}
                onClick={() => handleCatagory("all")}
              >
                All
              </li>
              {catagories.map((catg: any, i: number) => (
                <li
                  className={`hover:text-lime-600 underline hover:cursor-pointer ${
                    catagory === catg ? "text-lime-600 underline" : ""
                  }`}
                  onClick={() => handleCatagory(catg)}
                  key={i}
                >
                  {catg}
                </li>
              ))}
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="grid grid-cols-2 gap-3">
              {displayBlog.map((blog: any, i: number) => (
                <div key={i}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
            <div className="flex justify-center my-5">
              <Button
                className={`${hiddenBtn ? "hidden" : ""} px-5`}
                onClick={handleLoadMore}
              >
                Load more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
