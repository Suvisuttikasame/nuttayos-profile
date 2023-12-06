import Image from "next/image";

export default function PersonalInfo() {
  return (
    <div className="flex flex-col items-center gap-2 py-2 pb-8">
      <div className="bg-[#FFF] h-24 w-24 rounded-full overflow-hidden drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
        <Image
          src="/asset/demo-pic.jpg"
          alt="profile"
          sizes="100vw"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <p className="p-2 w-3/4">
        This is <span>Nuttayos Suvisuttikasame</span>, a full stack developer
        with experience in warehouse system, system analysis, root cause
        investigation and resource management. He has expertise in web
        application development both backend(
        <span>Nestjs</span>) and frontend(<span>React</span>) and also familar
        with agile and waterfall methodology. He is intermidiate in CI,
        Infra(Docker) and AWS.
      </p>
    </div>
  );
}
