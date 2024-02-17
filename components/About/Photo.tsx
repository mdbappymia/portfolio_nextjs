import { Card, Footer } from "flowbite-react";
import Image from "next/image";
import React from "react";
import myIamge from "@/public/images/profile.jpeg";
import { BsSkype } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { SiFiverr, SiUpwork } from "react-icons/si";

const Photo = () => {
  return (
    <Card className="rounded-3xl h-full">
      <div className="flex justify-center items-center">
        <Image src={myIamge} alt={""} height={300} className="rounded-3xl" />
      </div>
      <div className="mx-auto">
        <div className="mt-5 flex sm:justify-center">
          <Footer.Icon
            className="hover:!text-lime-500 md:mr-4 mr-3 inline-block"
            href="https://github.com/mdbappymia"
            target="_blank"
            icon={ImGithub}
          />
          <Footer.Icon
            className="hover:!text-lime-500 md:mr-4 mr-3 inline-block"
            href="https://www.linkedin.com/in/md-bappy-mia/"
            target="_blank"
            icon={LiaLinkedin}
          />
          <Footer.Icon
            className="hover:!text-lime-500 md:mr-4 mr-3 inline-block"
            href="skype:live:.cid.cff6807bd443ccca"
            icon={BsSkype}
          />
          <Footer.Icon
            className="hover:!text-lime-500 md:mr-4 mr-3 inline-block"
            href="tel:+8801732249303"
            icon={IoCall}
          />
          <Footer.Icon
            className="hover:!text-lime-500 md:mr-4 mr-3 inline-block"
            href="#"
            icon={SiFiverr}
          />
          <Footer.Icon
            className="hover:!text-lime-500 md:mr-4 mr-3 inline-block"
            href="#"
            icon={SiUpwork}
          />
        </div>
      </div>
    </Card>
  );
};

export default Photo;
