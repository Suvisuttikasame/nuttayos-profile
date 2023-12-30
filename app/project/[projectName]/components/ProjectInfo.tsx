type props = {
  projectName: string;
  projectDesc: {
    detail: string;
    stack: string;
    feature: string[];
    live: string;
  };
};

export default function ProjectInfo({ projectName, projectDesc }: props) {
  return (
    <div className="w-1/2 max-[1100px]:w-3/4 max-[550px]:w-auto">
      <h1 className="text-lg font-bold mb-4">{projectName}</h1>
      <ul className="text-sm flex flex-col gap-3">
        <li>
          <span className="font-semibold">Detail : </span>
          {projectDesc.detail}
        </li>
        <li>
          <span className="font-semibold">Stack & Tools : </span>
          {projectDesc.stack}
        </li>
        <li>
          <span className="font-semibold">Feature : </span>
          <ul className="ml-9 list-disc">
            {projectDesc.feature.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </li>
        <li>
          <span className="font-semibold">Live : </span>
          {projectDesc.live}
        </li>
      </ul>
    </div>
  );
}
