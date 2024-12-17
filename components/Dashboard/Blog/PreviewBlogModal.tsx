"use client";
import { useAppSelector } from "@/redux/store";
import { Modal } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import "@/public/css/mycss.css";

const PreviewBlogModal = ({
  openModal,
  setOpenModal,
  blogTitle,
  blogCategory,
  blogCover,
  editorContent,
}: any) => {
  const [coverSrc, setCoverSrc] = useState<any>("");
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    if (blogCover && blogCover[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverSrc(reader.result as string);
      };
      reader.readAsDataURL(blogCover[0]);
    }
  }, [blogCover]);

  console.log(process.env.NEXT_PUBLIC_ROOT_URL);
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="6xl">
      <Modal.Header>{blogTitle || "[Title missing]"}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <div className="relative w-full h-[500px]">
            <Image
              // src={coverSrc}
              src={require("/public/uploads/1734450344015_image.jpg")}
              alt="Blog Cover"
              layout="fill" // Ensures the image stretches to cover the container
              objectFit="cover" // Crops the image to fit the container proportionally
              className="rounded-3xl"
            />
          </div>
          {/* <img src={blogCover != null ? blogCover[0] : ""} alt="" /> */}
          <h3 className="text-4xl my-3 font-bold text-center">
            {blogTitle || "[Title missing]"}
          </h3>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Category: {blogCategory || "[Category Missing]"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Date: {new Date(Date.now()).toDateString()}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Author: {user.name}
            </p>
          </div>
          <div className="preview_editor_text">
            {ReactHtmlParser(
              editorContent
                .replaceAll("<h1", "<h1 class='text-2xl'")
                .replaceAll("<h2", "<h2 class='text-xl'")
                .replaceAll("<h3", "<h3 class='text-md'")
            )}
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
    </Modal>
  );
};

export default PreviewBlogModal;
