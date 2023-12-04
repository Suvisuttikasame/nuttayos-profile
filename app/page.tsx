import PersonalInfo from "./components/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import EducationInfo from "./components/EducationInfo";

const exps = [
  {
    companyName: "Hocco",
    duration: "time duration",
    description:
      "Neque porro quisquam est qui dulorem ipsum quia dolor sit amet",
  },
  {
    companyName: "Denso Intenational Asia",
    duration: "time duration",
    description:
      "Neque porro quisquam est qui dulorem ipsum quia dolor sit amet",
  },
  {
    companyName: "Turnkey communication service",
    duration: "time duration",
    description:
      "Neque porro quisquam est qui dulorem ipsum quia dolor sit amet",
  },
  {
    companyName: "Marsun",
    duration: "time duration",
    description:
      "Neque porro quisquam est qui dulorem ipsum quia dolor sit amet",
  },
];

export default async function Home() {
  return (
    <main className="text-xs py-8">
      <PersonalInfo />
      <ExperienceInfo arrayExp={exps} />
      <EducationInfo />
    </main>
  );
}
