import { Card } from "flowbite-react";
import React, { FC } from "react";
import { BiArrowFromLeft } from "react-icons/bi";

const OverviewCard: FC<any> = ({ overview }) => {
  return (
    <Card className="rounded-3xl border h-96">
      <h1 className="font-bold text-2xl">Overview</h1>
      <div className="h-80 overflow-y-scroll">
        {overview.map((ov: any, i: number) => (
          <h1
            key={i}
            className="mb-1 text-sm dark:text-gray-400 font-bold text-gray-700"
          >
            <BiArrowFromLeft className="inline-block" /> {ov}
          </h1>
        ))}
      </div>
    </Card>
  );
};

export default OverviewCard;
