import { Card } from "flowbite-react";
import React from "react";
const skills = [
  "React JS",
  "Express JS",
  "Node JS",
  "Mongo DB",
  "Redux Toolkit",
  "Next JS",
  "TypeScript",
  "JavaScript",
  "C#",
  "Tailwind CSS",
  "Bootstrap",
];
const Skills = () => {
  return (
    <Card className="rounded-3xl">
      <h1 className="font-bold text-2xl">Skill</h1>
      <div>
        <ul className="grid grid-cols-3">
          {skills.map((skill: string, i: number) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Skills;
