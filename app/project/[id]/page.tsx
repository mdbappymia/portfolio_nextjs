/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import projects from "@/public/data/projects.json";
import { Card } from "flowbite-react";
import OverviewCard from "@/components/ProjectDetails/OverviewCard";
import TechnologyCard from "@/components/ProjectDetails/TechnologyCard";
import CodeLinkCard from "@/components/ProjectDetails/CodeLinkCard";
import dummyProject from "@/public/images/dummy_project.png";

const ProjectDetailsPage: FC<any> = ({ params }) => {
  const { id } = params;
  const singleProject: any = projects.find((p) => p._id === id);
  return (
    <Card className="rounded-3xl">
      <img
        src={singleProject.img || dummyProject}
        className="h-64 w-full rounded-3xl"
        alt={""}
      />
      <h1 className="text-2xl font-bold">{singleProject.name}</h1>
      <p className="dark:text-gray-400 text-gray-700">
        {singleProject.subtitle}
      </p>
      <div className="md:grid grid-cols-2 mt-10 gap-3">
        <div className="w-full h-96 overflow-hidden rounded-3xl my-3 md:my-0">
          <img src={singleProject.screenshots[0] || dummyProject} alt="" />
        </div>
        <div>
          <OverviewCard overview={singleProject.overview} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="order-2 md:order-1">
          <TechnologyCard technology={singleProject.technology} />
        </div>
        <div className="w-full order-1 md:order-2 h-96 overflow-hidden rounded-3xl mb-3 md:mb-0">
          <img src={singleProject.screenshots[1] || dummyProject} alt="" />
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-3">
        <div className="w-full h-96 overflow-hidden rounded-3xl md:mb-0 mb-3">
          <img src={singleProject.screenshots[2] || dummyProject} alt="" />
        </div>
        <div>
          <CodeLinkCard codeLink={singleProject.codeLink} />
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetailsPage;
