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
      <p className="p-2 w-3/4 text-sm text-justify indent-2.5 hyphens-auto">
        This is <span className="font-bold">Nuttayos Suvisuttikasame</span>, a
        full stack developer with experience in warehouse system, system
        analysis, root cause investigation and resource management. I have
        expertise in web application development both backend(
        <span className="font-bold">Nestjs</span>) and frontend(
        <span className="font-bold">React</span>) and also familar with agile
        and waterfall methodology. Due to various perspectives on my journey,
        that makes me always keep improving both soft and hard skills. Because I
        believe we are born to be solution-makers, no matter which field you are
        in, you&apos;ll face problems. I realize and ready to tackle it.
        <br />
        When not coding, I love playing football, collecting manga and usually
        spending time on YouTube. Hopefully, I&apos;ll make many connections in
        order to write a story together.
        <br />
        <span className="text-lg font-bold">Tools</span>
        <br />
        Client: React, Nextjs
        <br />
        Server: Nestjs, Nodejs
        <br />
        Database: PostgreSQL, MySQL
        <br />
        Infra: Docker
        <br />
        Manage: Jira, Asana
      </p>
    </div>
  );
}
