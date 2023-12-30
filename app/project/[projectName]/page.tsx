"use client";
import Image from "next/image";
import ProjectInfo from "./components/ProjectInfo";
import BackButton from "../components/BackButton";

type props = {
  params: { projectName: string };
};
type projectDescription = {
  [projectName: string]: {
    detail: string;
    stack: string;
    feature: string[];
    live: string;
  };
};
const project: projectDescription = {
  "fast-pizza-co": {
    detail:
      "This project is a pizza shop simulation. For every customer who is hungry and a pizza lover, just go to a fast-pizza-co app then choose the type of pizza you love and let check it out. credit. Jonas Schmedtmann",
    stack: "React, tailwin, redux-toolkit",
    feature: [
      "check in a customer name and store in redux",
      "menu selection page to order pizza with quantity",
      "checkout form with customer information",
      "search order by order number",
    ],
    live: "-",
  },
  "world-wise-react": {
    detail:
      "This project is a small location tracking project from the React course. This app helps users who want to travel and have plans to set their activities and locations together on a map. So, whenever users want to check out details, just hit the pin on a map, and they can see the location that they've gone to in the past. credit. Jonas Schmedtmann",
    stack: "React, css module, json-server",
    feature: [
      "login and store user data in a context api",
      "submit location form to pin location on a map and save data in json-server",
      "delete location that's pin on a map",
    ],
    live: "-",
  },
  Proshop: {
    detail:
      "This project is ecommerce platform project from MERN course in order to demonstrate how online shop work roughly regarding to both admin and client usage. credit. Brad Traversy",
    stack: "React, Redux, Nodejs, Express and MongoDB",
    feature: [
      "both admin and client authentication",
      "admin product management",
      "admin user management",
      "admin order management",
      "client product review",
      "client product search",
      "client checkout process(payment method SCB QR code sandbox)",
    ],
    live: "-",
  },
  "smart-farm": {
    detail:
      "This is a smart farm project with drip irrigation system aim to help local people to harvest yields in dry area. The IoT system is brought to use to collecting farm status through Lora protocol (no mornitoring app) moreover we have microcontroller and floating sensor to control water level in a tank, and solenoid valve to open and close a tank punctually.",
    stack:
      "cubecell, Lora cat, floating sensor, solenoid valve, relay, water pump",
    feature: [
      "collecting farm status including pump running time, tank open status and water level on firebase",
      "automatically fill in water in order to make sure that a tank does not have water lower than threshold",
      "automatically drip water in a farm punctually",
    ],
    live: "-",
  },
};

export default function SubProject({ params }: props) {
  return (
    <main className="flex flex-col gap-10 py-8 px-16 justify-center items-center flex-1">
      <BackButton position="start" />
      <ProjectInfo
        projectName={params.projectName}
        projectDesc={project[params.projectName]}
      />
      <div className="w-128 flex flex-col gap-2 py-4">
        <Image
          src="/asset/demo-pic.jpg"
          alt="project-pic"
          width={200}
          height={100}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="shadow-md rounded-md"
        />
        <Image
          src="/asset/demo-pic.jpg"
          alt="project-pic"
          width={200}
          height={100}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="shadow-md rounded-md"
        />
      </div>
    </main>
  );
}
