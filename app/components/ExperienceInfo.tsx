"use client";
import { useState } from "react";
import ExperienceItem from "./ExperienceItem";

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
    <div className="flex gap-14 pl-2 pb-8">
      <div>
        <h1 className="text-lg decoration-1 transition duration-500 delay-150 hover:skew-y-2">
          Experience
        </h1>
        <ul className="flex flex-col gap-2 pl-4">
          {arrayExp.map((item, index) => {
            return (
              <ExperienceItem
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
      <div className="flex-grow border-solid border-4 border-[#E63946] bg-[#FFFF] shadow-md shadow-[#E63946] rounded-md transition-all ease-in-out  duration-1000 delay-150 hover:[transform:rotateY(180deg)]">
        <div className={`${clickedItem === "Hocco" ? "block" : "hidden"}`}>
          <div>content1</div>
          <div>picture1</div>
        </div>
        <div
          className={`${
            clickedItem === "Denso Intenational Asia" ? "block" : "hidden"
          }`}
        >
          <div>content2</div>
          <div>picture2</div>
        </div>
        <div
          className={`${
            clickedItem === "Turnkey communication service" ? "block" : "hidden"
          }`}
        >
          <div>content3</div>
          <div>picture3</div>
        </div>
        <div className={`${clickedItem === "Marsun" ? "block" : "hidden"}`}>
          <div>content4</div>
          <div>picture4</div>
        </div>
      </div>
    </div>
  );
}
