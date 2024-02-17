import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const WorkTogather = () => {
  return (
    <Link href={"/contact"}>
      <Card className="rounded-3xl">
        <h1 className="text-2xl font-bold my-4">
          Work With <span className="block ml-5 my-5">Togather...!</span>
        </h1>
        <div className="mt-10 flex justify-between mx-5 font-bold hover:text-lime-500 text-xl">
          <h1>Get In Touch</h1>
          <FaArrowUpRightFromSquare />
        </div>
      </Card>
    </Link>
  );
};

export default WorkTogather;
