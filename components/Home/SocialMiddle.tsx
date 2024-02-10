import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import socialIamge from "@/public/images/social-hover.png";

const SocialMiddle = () => {
  return (
    <Card className="rounded-3xl">
      <div className="flex justify-between">
        <Link href={""}>
          <div className="relative circle_icon">
            <Image
              src={socialIamge}
              className=" duration-700 rounded-full opacity-10 transition-all border border-gray-500"
              alt={""}
              height="100"
              width="100"
              priority={false}
            />
            <h1 className="absolute top-[30%] left-[30%]">
              <IoLogoFacebook className="text-4xl bg-transparent rounded-full" />
            </h1>
          </div>
        </Link>
        <Link href={""}>
          <div className="relative circle_icon">
            <Image
              src={socialIamge}
              className=" duration-700 rounded-full opacity-20 transition-all border border-gray-500"
              alt={""}
              height="100"
              width="100"
              priority={false}
            />
            <h1 className="absolute top-[30%] left-[30%]">
              <IoLogoTwitter className="text-4xl bg-transparent rounded-full " />
            </h1>
          </div>
        </Link>
      </div>
      <Link href={"/about"}>
        <div className="flex justify-between mx-5 font-bold hover:text-lime-500 mt-5 text-xl">
          <h1>Profile</h1>
          <FaArrowUpRightFromSquare />
        </div>
      </Link>
    </Card>
  );
};

export default SocialMiddle;
