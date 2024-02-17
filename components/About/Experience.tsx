import { Card } from "flowbite-react";
import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Experience = () => {
  return (
    <Card className="rounded-3xl h-full">
      <div className="flex justify-between">
        <h1 className="text-2xl">My Experience</h1>
        <FaArrowCircleDown className="text-2xl" />
      </div>
      <div>
        <ul>
          <li>
            <MdOutlineDoubleArrow className="inline-block mb-1" />
            <span className="font-bold mx-3">Junior Software Developer</span>at
            <span> Radiant Data Systems Ltd</span> -
            <span className=" font-light text-xs ml-1 text-gray-600 dark:text-gray-400">
              Feb 2022 to current
            </span>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Experience;
