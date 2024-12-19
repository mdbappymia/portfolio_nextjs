"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import BlogCard from "@/components/Blogs/BlogCard";
import { Button, Spinner } from "flowbite-react";
import { useGetBlogsQuery } from "@/redux/slices/blogApi";

const BlogPage = () => {
  const [page, setPage] = useState<any>(1);
  const [hiddenBtn, setHiddenBtn] = useState<boolean>(false);
  const [catagory, setCatagory] = useState<any>("");
  const [displayBlog, setDisplayBlog] = useState<any>([]);
  const [blogs, setBlogs] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  const { data, error, isLoading } = useGetBlogsQuery({
    category: "All",
    page: page,
  });
  // console.log(data);
  useEffect(() => {
    if (data) {
      setBlogs(data.blogs);
      setCategories(data.categories);
    }
    setCatagory(() => sessionStorage.getItem("catagory") || "All");
  }, [data, error, isLoading]);

  useEffect(() => {
    setDisplayBlog(blogs.slice(0, page * 4));
    if (catagory === "All" || catagory === "") {
      setDisplayBlog(blogs.slice(0, page * 4));
    } else {
      const filterBlogs = blogs.filter(
        (blg: any) => blg.blogCategory === catagory
      );
      setDisplayBlog(() => filterBlogs);
    }
  }, [data, catagory, page, blogs]);
  const handleLoadMore = () => {
    if (page * 6 > blogs.length) {
      setHiddenBtn(true);
      return;
    } else {
      setPage((a: any) => a + 1);
    }
  };
  const handleCatagory = (ctg: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("catagory", ctg);
    }
    setCatagory(() => ctg);
  };
  console.log(blogs);
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
      {isLoading ? (
        <div className="text-center _75vh flex items-center w-full justify-center">
          <Spinner
            aria-label="Center-aligned spinner example"
            size="xl"
            className="font-bold"
          />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-3">
            <div className="ml-3 mt-5">
              <h1 className="my-4 text-2xl">All Catagories</h1>
              <div>
                {categories.map((catg: any, i: number) => (
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
      )}
    </div>
  );
};

export default BlogPage;
