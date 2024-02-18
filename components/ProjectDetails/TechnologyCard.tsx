import { Card } from "flowbite-react";
import React, { FC } from "react";
import { BiArrowFromLeft } from "react-icons/bi";

const TechnologyCard: FC<any> = ({ technology }) => {
  return (
    <Card className="rounded-3xl border h-96">
      <h1 className="font-bold text-2xl">Technology used</h1>
      <div className="h-80 overflow-y-scroll">
        {technology.map((ov: any, i: number) => (
          <h3
            key={i}
            className="mb-1 dark:text-gray-400 font-bold text-gray-700"
          >
            <BiArrowFromLeft className="inline-block" /> {ov}
          </h3>
        ))}
      </div>
    </Card>
  );
};

export default TechnologyCard;
