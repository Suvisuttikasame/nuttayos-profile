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

const arrExpCard = [
  {
    companyName: "Hocco",
    role: "Full stack developer",
    responsibility: "Part of software development department",
    listInfo: [
      "develop web application both frontend and backend in order to meet customer requirement",
      "create system solution base on bussiness flow",
      "design er-diagram and make SRS",
      "technology & tools: Nestjs, React, MySQL, Git, Docker, TS/JS, Jira",
    ],
    images: [
      { url: "/asset/demo-pic.jpg", alt: "hocco1" },
      { url: "/asset/demo-pic.jpg", alt: "hocco2" },
    ],
  },
  {
    companyName: "Denso International Asia Co.,Ltd",
    role: "IoT engineer",
    responsibility: "Part of lean automation business department",
    listInfo: [
      "get requirement and design IoT solution in factory industry",
      "implement data gathering system and display by using datshare & dataview",
      "manage resources and control job during construction phase",
      "standardize loss collection system in factory",
      "technology & tools: IoTdatashare, IoTdataview, postgreSQL",
    ],
    images: [
      { url: "/asset/demo-pic.jpg", alt: "denso1" },
      { url: "/asset/demo-pic.jpg", alt: "denso2" },
    ],
  },
  {
    companyName: "Turnkey Communication Services Co.,LTD.",
    role: "Electronic engineer",
    responsibility: "Part of research and development department",
    listInfo: [
      "research and development IoT solution for outdoor area by using Lora protocol",
      "design and implement IoT system to meet customer requirement",
      "proceed system integrator job, prepare and collaborate with vendor to create an appropriate solution for government bidding project (NBTC)",
      "technology & tools: Cubecell, Lora, Firebase",
    ],
    images: [
      { url: "/asset/demo-pic.jpg", alt: "turnkey1" },
      { url: "/asset/demo-pic.jpg", alt: "turnkey2" },
    ],
  },
  {
    companyName: "Marsun",
    role: "Electrical engineer",
    responsibility: "Part of production department",
    listInfo: [
      "manage project resources(time, team and bugget) in production phase in order to be on schedule",
      "face problem sloving on production",
      "recover plan whenever project behind schedule",
      "test electrical system on sea before handover",
    ],
    images: [
      { url: "/asset/demo-pic.jpg", alt: "marsun1" },
      { url: "/asset/demo-pic.jpg", alt: "marsun2" },
    ],
  },
];

export default function ExperienceInfo({ arrayExp = [] }: props) {
  const [clickedItem, setClickedItem] = useState("");
  return (
    <div className="flex gap-14 pl-2 pb-8 justify-center items-center max-[850px]:flex-col">
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
      <ExperienceCard clickedItem={clickedItem} arrExpCard={arrExpCard} />
    </div>
  );
}
