import { Card } from "flowbite-react";
import React, { FC } from "react";

const CodeLinkCard: FC<any> = ({ codeLink }) => {
  return (
    <Card className="rounded-3xl border h-96 px-5">
      <h1 className="font-bold text-2xl">Code link</h1>
      <ol className="list-disc">
        {codeLink.map((link: any, i: number) => (
          <li
            key={i}
            className="mb-1 dark:text-gray-400 font-bold text-gray-700"
          >
            <a
              href={link}
              className="text-lime-500 hover:underline"
              target="_blank"
            >
              {link}
            </a>
          </li>
        ))}
      </ol>
    </Card>
  );
};

export default CodeLinkCard;
