import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import projects from "@/public/data/projects.json";

const ProjectPage = () => {
  const firstFourProjects = projects.slice(0, 4);
  const remainingProjects = projects.slice(4);
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
      <div className="my-5">
        <div className="lg:grid grid-cols-2 gap-3 mb-3">
          <div className="w-full flex flex-col">
            <div className="mb-3 h-72">
              <ProjectCard project={firstFourProjects[0]} />
            </div>
            <div className="h-72 mb-3 lg:mb-0">
              <ProjectCard project={firstFourProjects[1]} />
            </div>
          </div>
          <div className="h-72 lg:h-full">
            <ProjectCard project={firstFourProjects[2]} />
          </div>
        </div>
        <div className="h-72 mb-3">
          <ProjectCard project={firstFourProjects[3]} />
        </div>
        <div className="lg:grid grid-cols-2 gap-3">
          {remainingProjects.map((project: any, i: number) => (
            <div key={i} className="mb-3 h-72">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
