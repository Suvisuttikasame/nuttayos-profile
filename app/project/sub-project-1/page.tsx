import Image from "next/image";

export default function SubProject() {
  return (
    <main className="text-xs py-8 px-32">
      <div>
        <h1>Sub Project 1</h1>
        <ul>
          <li>detail:</li>
          <li>stack:</li>
          <li>objective:</li>
          <li>source:</li>
        </ul>
      </div>
      <div className="w-64 flex flex-col gap-2 py-4 mx-auto">
        <Image
          src="/asset/demo-pic.jpg"
          alt="project-pic"
          width={200}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="shadow-md rounded-md"
        />
        <Image
          src="/asset/demo-pic.jpg"
          alt="project-pic"
          width={200}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="shadow-md rounded-md"
        />
      </div>
    </main>
  );
}
