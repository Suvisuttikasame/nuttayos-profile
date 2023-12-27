"use client";
import { useState } from "react";
import ExperienceList from "./ExperienceList";
import ExperienceCard from "./ExperienceCard";

type props = {
  arrayExp: {
    companyName: string;
    duration: string;
    description: string;
  }[];
};

export default function ExperienceInfo({ arrayExp = [] }: props) {
  const [clickedItem, setClickedItem] = useState("");
  return (
    <div className="flex gap-14 pl-2 pb-8 justify-center items-center">
      <div>
        <h1 className="text-lg font-extrabold decoration-1 transition duration-500 delay-150 hover:skew-y-2">
          Experience
        </h1>
        <ul className="flex flex-col gap-2 pl-4">
          {arrayExp.map((item, index) => {
            return (
              <ExperienceList
                clickFn={setClickedItem}
                companyName={item.companyName}
                duration={item.duration}
                description={item.description}
                key={index}
              />
            );
          })}
        </ul>
      </div>
      <ExperienceCard clickedItem={clickedItem} />
    </div>
  );
}
