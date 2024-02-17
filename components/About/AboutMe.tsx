import { Button, Card } from "flowbite-react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Card className="rounded-3xl h-full">
      <div className="my-5">
        <h1 className="text-2xl font-extrabold leading-10">
          <span className="block">Hello,</span> I am{" "}
          <span className="text-lime-500">Md. Bappy Mia</span>, an{" "}
          <span className="block">Web Developer.</span>
        </h1>
        <p className="text-gray-800 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          amet autem, officia ratione enim molestias nam, numquam repudiandae
          laboriosam, doloremque dolorem assumenda. Fugiat repudiandae, culpa
          beatae, labore dignissimos perferendis ad deleniti sequi, officia sint
          illum neque hic. Voluptate vero officia pariatur velit eos repudiandae
          magnam, perspiciatis sequi! Debitis, totam unde!
        </p>
      </div>
      <div className="flexitems-center">
        <Button
          color="lime"
          pill
          size={"lg"}
          className="dark:text-white mr-2 download_btn "
        >
          Download Resume
          <span className="ml-3 hidden font-bold">
            <FaArrowDown />
          </span>
        </Button>
      </div>
    </Card>
  );
};

export default AboutMe;
