import { Card } from "flowbite-react";
import React from "react";

const MiddleRight = () => {
  return (
    <Card className="rounded-3xl">
      <div className="grid grid-cols-2 gap-5">
        <div className="text-center my-5">
          <h1 className="font-bold text-5xl my-5">02+</h1>
          <h3 className="font-bold text-xl">YEARS EXPERIENCE</h3>
        </div>
        <div className="text-center my-5">
          <h1 className="font-bold text-5xl my-5">10+</h1>
          <h3 className="font-bold text-xl">TOTAL PROJECTS</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="text-center my-5">
          <h1 className="font-bold text-5xl my-5">10+</h1>
          <h3 className="font-bold text-xl">CLENTS WORLDWIBE</h3>
        </div>
        <div className="text-center my-5">
          <h1 className="font-bold text-5xl my-5">0</h1>
          <h3 className="font-bold text-xl">UNHAPPY CLENTS</h3>
        </div>
      </div>
    </Card>
  );
};

export default MiddleRight;
