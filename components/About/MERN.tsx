import { Card } from "flowbite-react";
import React from "react";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const MERN = () => {
  return (
    <Card className="rounded-3xl h-full">
      <ul className="">
        <div className="flex justify-between">
          <li>
            <DiReact className="text-4xl my-4" />
          </li>
          <li>
            <FaNodeJs className="text-4xl my-4" />
          </li>
        </div>
        <div className="flex justify-between">
          <li>
            <SiExpress className="text-4xl my-4" />
          </li>
          <li>
            <DiMongodb className="text-4xl my-4" />
          </li>
        </div>
      </ul>
    </Card>
  );
};

export default MERN;
