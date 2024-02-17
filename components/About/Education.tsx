import { Card } from "flowbite-react";
import React from "react";

const Education = () => {
  return (
    <Card className="rounded-3xl h-full">
      <h1 className="text-2xl mb-3 font-bold">Education</h1>
      <ul>
        <li>
          {/* <MdOutlineDoubleArrow className="inline-block mb-1" /> */}
          <span className="font-bold mr-3">
            B.Sc in Electronics & Communication Engineering
          </span>
          at
          <span>
            {" "}
            Hajee Mohammad Danesh Science and Technology University
          </span>{" "}
          -
          <span className=" font-light text-xs ml-1 text-gray-600 dark:text-gray-400">
            Feb 2022 to current
          </span>
        </li>
      </ul>
    </Card>
  );
};

export default Education;
