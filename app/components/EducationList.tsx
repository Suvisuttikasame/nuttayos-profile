type props = {
  schoolName: string;
  duration: string;
};

export default function EducationList({ schoolName, duration }: props) {
  return (
    <li>
      <span className="text-base font-semibold">{schoolName}</span>
      <br />
      <p>{duration}</p>
    </li>
  );
}
