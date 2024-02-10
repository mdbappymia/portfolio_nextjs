import { Card, Footer } from "flowbite-react";
import React from "react";
import { BsSkype } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { SiFiverr, SiUpwork } from "react-icons/si";

const MainFooter = () => {
  return (
    <Card className="rounded-3xl my-3 py-4">
      <div className="w-full px-4  sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Md. Bappy Mia" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
          <div className=" flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon
              className="hover:text-lime-500"
              href="https://github.com/mdbappymia"
              target="_blank"
              icon={ImGithub}
            />
            <Footer.Icon
              className="hover:text-lime-500"
              href="https://www.linkedin.com/in/md-bappy-mia/"
              target="_blank"
              icon={LiaLinkedin}
            />
            <Footer.Icon
              className="hover:text-lime-500"
              href="skype:live:.cid.cff6807bd443ccca"
              icon={BsSkype}
            />
            <Footer.Icon
              className="hover:text-lime-500"
              href="tel:+8801732249303"
              icon={IoCall}
            />
            <Footer.Icon
              className="hover:text-lime-500"
              href="#"
              icon={SiFiverr}
            />
            <Footer.Icon
              className="hover:text-lime-500"
              href="#"
              icon={SiUpwork}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MainFooter;
