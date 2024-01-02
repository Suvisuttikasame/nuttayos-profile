import Link from "next/link";
import Image from "next/image";

type props = {
  projectName: string;
  description: string;
  image: string;
  index: number;
};

export default function ProjectCard({
  projectName,
  description,
  image,
  index,
}: props) {
  return (
    <>
      <div
        className={`rounded-md bg-slate-100 border-solid h-64 w-64 self-center ${
          index % 2 === 0 ? "justify-self-end" : "justify-self-start"
        } overflow-hidden text-center transition-all ease-in-out delay-100 duration-300 hover:scale-105 hover:shadow-[0_4px_3px_rgba(0,0,0,0.5)] max-[550px]:justify-self-center`}
      >
        <Link href={`project/${projectName}`}>
          <div>
            <Image
              src={image}
              alt={`${projectName}-pic`}
              width={200}
              height={100}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                scale: 1.1,
              }}
            />
          </div>
          <div className="px-4">
            <h1 className="py-1 text-sm font-medium underline">
              {projectName}
            </h1>
            <p className="text-wrap">{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
