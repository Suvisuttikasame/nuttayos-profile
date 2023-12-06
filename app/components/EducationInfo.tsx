import EducationList from "./EducationList";

type props = {
  arrayEdu: {
    schoolName: string;
    duration: string;
  }[];
};

export default function EducationInfo({ arrayEdu = [] }: props) {
  return (
    <div className="flex gap-14 pl-2 pb-8 justify-center items-center">
      <div className="h-56 w-56 bg-red-500">Object</div>
      <div>
        <h1 className="text-lg decoration-1 transition duration-500 delay-150 hover:skew-y-2">
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
