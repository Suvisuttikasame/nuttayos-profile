import { Dispatch, SetStateAction } from "react";

type props = {
  clickFn: Dispatch<SetStateAction<string>>;
  companyName: string;
  duration: string;
  description: string;
};

export default function ExperienceList({
  clickFn,
  companyName,
  duration,
  description,
}: props) {
  return (
    <li
      className="group transition ease-in-out duration-500 delay-150 cursor-pointer hover:scale-95"
      id={companyName}
      onClick={(e) => {
        clickFn(e.currentTarget.id);
      }}
    >
      <div className="flex gap-2 items-center">
        <div
          className="w-1 h-1 bg-[#1d3557] rounded -translate-y-4 transition-all ease-in-out duration-500 delay-150
         before:absolute before:rounded before:origin-right before:right-0.5 before:w-0 before:h-1 before:transition-[width] before:bg-[#1d3557]
         after:absolute after:rounded after:origin-right after:right-0.5 after:w-0 after:h-1 after:transition-[width] after:bg-[#1d3557]
          group-hover:w-6 group-hover:before:w-3 group-hover:before:-rotate-45 group-hover:after:w-3 group-hover:after:rotate-45"
        />
        <div>
          <span className="text-base">{companyName}</span>
          <br />
          <span>{duration}</span>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
