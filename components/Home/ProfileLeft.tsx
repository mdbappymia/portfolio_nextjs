import Image from "next/image";
import { Card, Footer, Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { BsSkype } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { SiFiverr, SiUpwork } from "react-icons/si";
import profileImg from "@/public/images/profile.jpeg";

const ProfileLeft = () => {
  return (
    <Card className="mb-3 shadow-sm rounded-3xl">
      <div className="flex justify-center my-5">
        <Image
          className="rounded-full"
          src={profileImg}
          alt={""}
          height={200}
          width={200}
          priority={true}
        />
      </div>
      {/* social link  */}
      <div className="mx-auto">
        <div className="my-5 flex sm:mt-0 sm:justify-center">
          <Footer.Icon
            className="hover:text-lime-500 mr-2 inline-block"
            href="https://github.com/mdbappymia"
            target="_blank"
            icon={ImGithub}
          />
          <Footer.Icon
            className="hover:text-lime-500 mr-2 inline-block"
            href="https://www.linkedin.com/in/md-bappy-mia/"
            target="_blank"
            icon={LiaLinkedin}
          />
          <Footer.Icon
            className="hover:text-lime-500 mr-2 inline-block"
            href="skype:live:.cid.cff6807bd443ccca"
            icon={BsSkype}
          />
          <Footer.Icon
            className="hover:text-lime-500 mr-2 inline-block"
            href="tel:+8801732249303"
            icon={IoCall}
          />
          <Footer.Icon
            className="hover:text-lime-500 mr-2 inline-block"
            href="#"
            icon={SiFiverr}
          />
          <Footer.Icon
            className="hover:text-lime-500 mr-2 inline-block"
            href="#"
            icon={SiUpwork}
          />
        </div>
      </div>
      {/* social link end */}
      <div className="flex justify-center items-center">
        <Button
          color="lime"
          pill
          size={"lg"}
          className="dark:text-white mx-2 download_btn "
        >
          Download Resume
          <span className="ml-3 hidden font-bold">
            <FaArrowDown />
          </span>
        </Button>
      </div>
      <Link href="/about">
        <div className="flex mx-6 justify-between mt-10 mb-5 hover:text-lime-500 font-bold">
          <h1 className="text-xl">Biography</h1>
          <h1 className="text-xl mt-1">
            <FaArrowUpRightFromSquare />
          </h1>
        </div>
      </Link>
    </Card>
  );
};

export default ProfileLeft;
