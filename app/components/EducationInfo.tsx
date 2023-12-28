import EducationList from "./EducationList";
import Loading from "../loading";
import dynamic from "next/dynamic";

type props = {
  arrayEdu: {
    schoolName: string;
    duration: string;
  }[];
};
const MyModel = dynamic(() => import("../model/MyModel"), {
  loading: () => <Loading />,
});

export default function EducationInfo({ arrayEdu = [] }: props) {
  return (
    <div className="flex gap-14 pl-2 pb-8 justify-center items-center max-[850px]:flex-col-reverse">
      <div className="flex">
        <MyModel />
      </div>
      <div>
        <h1 className="text-lg font-extrabold decoration-1 transition duration-500 delay-150 hover:skew-y-2">
          Education
        </h1>
        <ul className="flex flex-col gap-2 list-disc pl-4">
          {arrayEdu.map((element, index) => {
            return (
              <EducationList
                schoolName={element.schoolName}
                duration={element.duration}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
