import { Card } from "flowbite-react";
import React from "react";
import { ImArrowRight } from "react-icons/im";

const WhatIdo = () => {
  return (
    <Card className="rounded-3xl h-full">
      <h1 className="text-2xl font-bold">What I do</h1>

      <div>
        <ul>
          <li className="my-4 text-gray-800 dark:text-gray-300">
            <ImArrowRight className="inline-block mb-1" />
            <span className="font-bold mx-3">Web Design</span>
          </li>
          <li className="my-4 text-gray-800 dark:text-gray-300">
            <ImArrowRight className="inline-block mb-1" />
            <span className="font-bold mx-3">Web Development</span>
          </li>
          <li className="my-4 text-gray-800 dark:text-gray-300">
            <ImArrowRight className="inline-block mb-1" />
            <span className="font-bold mx-3">Web Application</span>
          </li>
          <li className="my-4 text-gray-800 dark:text-gray-300">
            <ImArrowRight className="inline-block mb-1" />
            <span className="font-bold mx-3">App Development</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default WhatIdo;
