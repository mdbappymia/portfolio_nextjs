import { Button, Card } from "flowbite-react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Card className="rounded-3xl h-full">
      <div className="my-5">
        <h1 className="text-2xl font-extrabold leading-10">
          <span className="block">Hello,</span> I am{" "}
          <span className="text-lime-500">Md. Bappy Mia</span>, a{" "}
          <span className="block">Web Developer.</span>
        </h1>
        <p className="text-gray-800 dark:text-gray-300">
          Md. Bappy Mia is a passionate MERN stack developer with expertise in
          building dynamic and scalable web applications. Currently serving as a
          Junior Software Developer at Radiant Data System Ltd, he brings a
          blend of technical skills and creativity to his role. Bappy is skilled
          in MongoDB, Express.js, React.js, and Node.js, enabling him to craft
          seamless full-stack solutions. Dedicated to continuous learning and
          innovation, he is committed to delivering high-quality software while
          staying updated with the latest technologies. Bappy&apos;s enthusiasm
          for coding and problem-solving drives him to excel in collaborative
          and challenging environments.
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
