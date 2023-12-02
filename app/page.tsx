import PersonalInfo from "./components/PersonalInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import EducationInfo from "./components/EducationInfo";

export default async function Home() {
  return (
    <main className="text-xs py-8">
      <PersonalInfo />
      <ExperienceInfo />
      <EducationInfo />
    </main>
  );
}
