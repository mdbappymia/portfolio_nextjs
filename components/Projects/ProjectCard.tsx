/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";

const ProjectCard: FC<any> = ({ project }) => {
  return (
    <Link href={""}>
      <div className="block project_card overflow-hidden rounded-3xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 relative h-full">
        <img className="w-full h-full" src={project.img} alt="" />
        <div className="absolute w-full bg-gradient-to-b from-gray-400 to-gray-800 shadow-inner h-0 transition-all duration-700 ease-in-out top-0 rounded-lg project_card_overlay"></div>
        <div className="absolute bottom-0 m-5 card_text opacity-0">
          <h5 className="mb-2 text-xl font-medium leading-tight text-white">
            {project.name}
          </h5>
          <p className="mb-4 text-base text-white">{project.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
