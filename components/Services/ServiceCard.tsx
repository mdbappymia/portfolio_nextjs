import { Card } from "flowbite-react";
import React, { FC } from "react";

const ServiceCard: FC<any> = ({ service }) => {
  return (
    <Card className="rounded-3xl w-full">
      <h1 className="font-bold text-2xl">{service.name}</h1>
      <div className="flex">
        <i
          className={`${service.icon} font-bold text-5xl my-3 border p-4 rounded-full text-lime-400 border-lime-500`}
        ></i>
      </div>
      <p>{service.description}</p>
    </Card>
  );
};

export default ServiceCard;
