import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Experience from "@/components/About/Experience";
import MERN from "@/components/About/MERN";
import MiddleRight from "@/components/About/MiddleRight";
import Photo from "@/components/About/Photo";
import Skills from "@/components/About/Skills";
import SocialBottom from "@/components/About/SocialBottom";
import WhatIdo from "@/components/About/WhatIdo";
import WorkTogather from "@/components/About/WorkTogather";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <div className="inline-block">
        <Link
          href={"/"}
          className="uppercase font-bold text-md flex items-center"
        >
          <FaArrowLeft className="inline-block mr-3" /> Back to{" "}
          <span className="text-lime-500 inline-block ml-2">home</span>
        </Link>
      </div>
      <div className="my-3">
        <div className="lg:grid grid-cols-3 gap-3">
          <div className="col-span-2 mb-3 lg:mb-0">
            <AboutMe />
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <div>
        <div className="lg:grid grid-cols-4 mb-3 gap-3">
          <div className="mb-3 lg:mb-0 hidden lg:block">
            <MERN />
          </div>
          <div className="col-span-3">
            <Skills />
          </div>
        </div>
      </div>
      <div>
        <div className="md:grid lg:grid-cols-9 md:grid-cols-2 gap-3">
          <div className="lg:col-span-3">
            <Experience />
          </div>
          <div className="lg:col-span-2 my-3 md:my-0">
            <WhatIdo />
          </div>
          <div className="lg:col-span-4 md:col-span-2">
            <MiddleRight />
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-3">
          <div className="order-1">
            <SocialBottom />
          </div>
          <div className="col-span-2 my-3 md:my-0 md:order-3 lg:order-2">
            <Education />
          </div>
          <div className="md:order-2 lg:order-3">
            <WorkTogather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
