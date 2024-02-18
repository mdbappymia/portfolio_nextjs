import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaPenSquare } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdDeveloperMode } from "react-icons/md";
import likeImg from "@/public/images/goods.png";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ServiceMiddle = () => {
  return (
    <Card className="rounded-3xl">
      <h1 className="font-bold text-2xl">Services Offering</h1>
      <Link href={"/services"}>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 my-5">
          <div className=" flex-col justify-center items-center flex">
            <FaPenSquare className="text-5xl text-lime-600" />
            <h1 className="text-sm font-bold mt-7">Web Design</h1>
          </div>
          <div className=" flex-col justify-center items-center flex">
            <IoSettings className="text-5xl text-lime-600" />
            <h1 className="text-sm font-bold mt-7">Development</h1>
          </div>
          <div className=" flex-col justify-center items-center flex">
            <MdDeveloperMode className="text-5xl text-lime-600" />
            <h1 className="text-sm font-bold mt-7">Software Dev</h1>
          </div>
          <div className=" flex-col justify-center items-center flex">
            <DiGoogleAnalytics className="text-5xl text-lime-600" />
            <h1 className="text-sm font-bold mt-7">Marketing</h1>
          </div>
        </div>
      </Link>
      <div className="flex gap-5 my-8">
        <h1 className="font-bold text-3xl">Things I&apos;m good at</h1>
        <Image
          className="animate__animated animate__infinite animate__swing"
          src={likeImg}
          alt={"Thumsup"}
          width={40}
          height={40}
        />
      </div>
      <Link href={"/services"}>
        <div className="flex justify-between mx-5 font-bold hover:text-lime-500 my-10 text-lg">
          <h1>All Services</h1>
          <FaArrowUpRightFromSquare />
        </div>
      </Link>
    </Card>
  );
};

export default ServiceMiddle;
