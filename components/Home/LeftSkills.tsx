import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { BsGithub } from "react-icons/bs";
import { DiMongodb, DiReact } from "react-icons/di";
import {
  SiMongoose,
  SiPostman,
  SiRedux,
  SiVisualstudiocode,
} from "react-icons/si";
const skills = [
  "React JS",
  "Express JS",
  "Node JS",
  "Mongo DB",
  "Redux Toolkit",
  "Next JS",
  "TypeScript",
  "JavaScript",
  "C#",
  "Tailwind CSS",
  "Bootstrap",
];
const LeftSkills = () => {
  return (
    <Card className="rounded-3xl">
      <h1 className="text-2xl font-bold my-3">Skills & Tools</h1>
      <Marquee>
        {skills.map((skill: string, i: number) => (
          <h3
            className="px-5 py-3 border dark:hover:bg-gray-500 hover:bg-gray-300 border-gray-600 rounded mx-3"
            key={i}
          >
            {skill}
          </h3>
        ))}
      </Marquee>
      <Marquee direction="right">
        <Link
          href={"https://code.visualstudio.com/"}
          target="_blank"
          className="px-5 py-3 mx-3 border rounded border-gray-400 flex hover:bg-lime-500 my-3"
        >
          <SiVisualstudiocode className="text-3xl " />
        </Link>
        <Link
          href={"https://git-scm.com/"}
          target="_blank"
          className="px-5 py-3 mx-3 border rounded border-gray-400 flex hover:bg-lime-500 my-3"
        >
          <BsGithub className="text-3xl " />
        </Link>
        <Link
          href={"https://www.mongodb.com/"}
          target="_blank"
          className="px-5 py-3 mx-3 border rounded border-gray-400 flex hover:bg-lime-500 my-3"
        >
          <DiMongodb className="text-3xl " />
        </Link>
        <Link
          href={"https://mongoosejs.com/"}
          target="_blank"
          className="px-5 py-3 mx-3 border rounded border-gray-400 flex hover:bg-lime-500 my-3"
        >
          <SiMongoose className="text-3xl " />
        </Link>
        <Link
          href={"https://www.postman.com/"}
          target="_blank"
          className="px-5 py-3 mx-3 border rounded border-gray-400 flex hover:bg-lime-500 my-3"
        >
          <SiPostman className="text-3xl " />
        </Link>
        <Link
          href={"https://redux.js.org/"}
          target="_blank"
          className="px-5 py-3 mx-3 border rounded border-gray-400 flex hover:bg-lime-500 my-3"
        >
          <SiRedux className="text-3xl " />
        </Link>
        <Link
          href={"https://react.dev/"}
          target="_blank"
          className="px-5 py-3 mx-3 border rounded border-gray-400 flex hover:bg-lime-500 my-3"
        >
          <DiReact className="text-3xl " />
        </Link>
      </Marquee>
    </Card>
  );
};

export default LeftSkills;
