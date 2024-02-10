import { Card } from "flowbite-react";
import React from "react";
import Marquee from "react-fast-marquee";

const RightMirquee = () => {
  return (
    <Card className="rounded-3xl">
      <Marquee speed={20} className="overflow-hidden">
        <h1 className="text-lg uppercase font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          tempore?
        </h1>
      </Marquee>
    </Card>
  );
};

export default RightMirquee;
