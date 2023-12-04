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
    <div className="flex gap-14 pl-2 pb-8 justify-center items-center">
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
      <div className="w-96 h-64 relative border-solid border-4 border-[#E63946] bg-[#FFFF] shadow-md shadow-[#E63946] rounded-md [transform-style:preserve-3d] transition-all ease-in-out  duration-1000 delay-150 hover:[transform:rotateY(180deg)]">
        <div
          className={`${
            clickedItem === "Hocco" ? "block" : "hidden"
          } bg-green-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>content1</p>
        </div>
        <div
          className={`${
            clickedItem === "Hocco" ? "block" : "hidden"
          } [transform:rotateY(180deg)] bg-red-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>picture1</p>
        </div>
        <div
          className={`${
            clickedItem === "Denso Intenational Asia" ? "block" : "hidden"
          } bg-green-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>content2</p>
        </div>
        <div
          className={`${
            clickedItem === "Denso Intenational Asia" ? "block" : "hidden"
          } [transform:rotateY(180deg)] bg-red-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>picture2</p>
        </div>
        <div
          className={`${
            clickedItem === "Turnkey communication service" ? "block" : "hidden"
          } bg-green-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>content3</p>
        </div>
        <div
          className={`${
            clickedItem === "Turnkey communication service" ? "block" : "hidden"
          } [transform:rotateY(180deg)] bg-red-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>picture3</p>
        </div>
        <div
          className={`${
            clickedItem === "Marsun" ? "block" : "hidden"
          } bg-green-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>content4</p>
        </div>
        <div
          className={`${
            clickedItem === "Marsun" ? "block" : "hidden"
          } [transform:rotateY(180deg)] bg-red-500 absolute w-full h-full [backface-visibility:hidden]`}
        >
          <p>picture4</p>
        </div>
      </div>
    </div>
  );
}
