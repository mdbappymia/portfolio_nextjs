import React from "react";
import { Card } from "flowbite-react";
import ProfileLeft from "@/components/Home/ProfileLeft";
import TitleMiddleLeft from "@/components/Home/TitleMiddleLeft";
import SocialMiddle from "@/components/Home/SocialMiddle";
import RightMirquee from "@/components/Home/RightMirquee";
import ArticleLeft from "@/components/Home/ArticleLeft";
import ServiceMiddle from "@/components/Home/ServiceMiddle";
import RightShotInfo from "@/components/Home/RightShotInfo";
import RightLatestWork from "@/components/Home/RightLatestWork";
import LeftSkills from "@/components/Home/LeftSkills";
import MiddleWorkWith from "@/components/Home/MiddleWorkWith";

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-4 w-full lg:gap-5">
      <div className="col-span-3">
        <div className="grid lg:grid-cols-3  gap-5">
          <div className="gap-5 rounded-lg">
            <div className="lg:block grid-cols-2">
              <ProfileLeft />
              <ArticleLeft />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="md:grid grid-cols-2 block gap-5 mb-3">
              <div className="mb-3 md:mb-0">
                <TitleMiddleLeft />
              </div>
              <SocialMiddle />
            </div>
            <ServiceMiddle />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 my-3">
          <div className="col-span-2 mb-3">
            <LeftSkills />
          </div>
          <MiddleWorkWith />
        </div>
      </div>
      <div className="m">
        <RightMirquee />
        <div className="md:grid lg:block lg:grid-cols-2 grid-cols-1 md:gap-5 my-5">
          <RightShotInfo />
          <RightLatestWork />
        </div>
      </div>
    </div>
  );
};

export default Home;
