import PersonalInfo from "./components/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import EducationInfo from "./components/EducationInfo";

const exps = [
  {
    companyName: "Hocco",
    duration: "Feb 2022 - present",
    description: "Software house",
  },
  {
    companyName: "Denso International Asia Co.,Ltd",
    duration: "Feb 2021 - Oct 2021",
    description: "Asian regional hub of Denso group",
  },
  {
    companyName: "Turnkey Communication Services Co.,LTD.",
    duration: "Feb 2019 - Feb 2021",
    description: "Solution creator & System integrator company",
  },
  {
    companyName: "Marsun",
    duration: "Aug 2018 - Feb 2019",
    description: "Ship building company",
  },
];

const edus = [
  {
    schoolName: "Chulalongkorn university",
    duration: "graduated Jun 2018, bachelor degree of electrical engineering",
  },
  {
    schoolName: "Debsirin",
    duration: "graduated Apr 2014, high school",
  },
];

export default async function Home() {
  return (
    <main className="text-xs flex-1">
      <PersonalInfo />
      <ExperienceInfo arrayExp={exps} />
      <EducationInfo arrayEdu={edus} />
    </main>
  );
}
