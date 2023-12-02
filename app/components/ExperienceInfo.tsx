const test = async () => {
  "use server";
  console.log("click");
};
export default function ExperienceInfo() {
  return (
    <div className="flex gap-14 pl-2 pb-8">
      <div>
        <h1 className="text-lg decoration-1">Experience</h1>
        <ul className="flex flex-col gap-2 list-disc pl-4">
          <li onClick={test}>
            <span className="text-base">Hocco</span>
            <br />
            <span>datetime duration</span>
            <p>
              Neque porro quisquam est qui dulorem ipsum quia dolor sit amet
            </p>
          </li>
          <li>
            <span className="text-base">Denso Intenational Asia</span>
            <br />
            <span>datetime duration</span>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </li>
          <li>
            <span className="text-base">Turnkey communication service</span>
            <br />
            <span>datetime duration</span>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </li>
          <li>
            <span className="text-base">Marsun</span>
            <br />
            <span>datetime duration</span>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </li>
        </ul>
      </div>
      <div className="flex-grow bg-red-500"></div>
    </div>
  );
}
