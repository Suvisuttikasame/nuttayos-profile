export default function EducationInfo() {
  return (
    <div className="flex gap-14 pl-2">
      <div className="flex-grow bg-red-500"></div>
      <div>
        <h1 className="text-lg decoration-1">Education</h1>
        <ul className="flex flex-col gap-2 list-disc pl-4">
          <li>
            <span className="text-base">Chulalongkorn university</span>
            <br />
            <p>
              Neque porro quisquam est qui dulorem ipsum quia dolor sit amet
            </p>
          </li>
          <li>
            <span className="text-base">Debsirin school</span>
            <br />
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
