import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

const TitleMiddleLeft = () => {
  return (
    <Card className="p-5 rounded-3xl">
      <h1 className="font-bold text-2xl text-lime-500">Title</h1>
      <h3 className="font-bold dark:text-gray-400 text-gray-700 hover:text-gray-800 text-xl mt-10 mb-5 ml-5">
        <Link href={"/about"}>Web Developer</Link>
      </h3>
    </Card>
  );
};

export default TitleMiddleLeft;
