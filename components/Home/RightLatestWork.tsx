import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import latestProject from "@/public/images/project_home.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

const RightLatestWork = () => {
  return (
    <Card className="rounded-3xl">
      <h1 className="text-2xl font-bold">
        See My <span className="inline-block ml-5">Latest Works</span>
      </h1>
      <Link href={"https://simple-quiz-b.web.app/"} target="_blank">
        <Image
          src={latestProject}
          alt="Latest project"
          className="w-full rounded-xl"
          height={150}
        />
      </Link>
      <Link href={"/project"}>
        <div className="flex justify-between mx-5 font-bold hover:text-lime-500 mt-5 text-xl">
          <h1>All Projects</h1>
          <FaArrowUpRightFromSquare />
        </div>
      </Link>
    </Card>
  );
};

export default RightLatestWork;
