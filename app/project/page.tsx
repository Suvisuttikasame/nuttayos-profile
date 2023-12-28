import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className="text-xs">
      <div className="flex flex-col justify-center items-center gap-8">
        <section className="w-3/4 grid grid-cols-2 gap-4">
          <div className="rounded-md bg-slate-100 border-solid h-64 w-64 self-center justify-self-end overflow-hidden text-center transition-all ease-in-out delay-100 duration-300 hover:scale-105 hover:shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
            <Link href="project/sub-project-1">
              <div>
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
                />
              </div>
              <div>
                <h1 className="py-1">demo project</h1>
                <p>
                  this is just demo description of a project. Please fill in
                  prroject infomation later.
                </p>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-slate-100 border-solid h-64 w-64 self-center justify-self-start overflow-hidden text-center transition-all ease-in-out delay-100 duration-300 hover:scale-105 hover:shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
            <Link href="project/sub-project-1">
              <div>
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
                />
              </div>
              <div>
                <h1 className="py-1">demo project</h1>
                <p>
                  this is just demo description of a project. Please fill in
                  prroject infomation later.
                </p>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-slate-100 border-solid h-64 w-64 self-center justify-self-end overflow-hidden text-center transition-all ease-in-out delay-100 duration-300 hover:scale-105 hover:shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
            <Link href="project/sub-project-1">
              <div>
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
                />
              </div>
              <div>
                <h1 className="py-1">demo project</h1>
                <p>
                  this is just demo description of a project. Please fill in
                  prroject infomation later.
                </p>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-slate-100 border-solid h-64 w-64 self-center justify-self-start overflow-hidden text-center transition-all ease-in-out delay-100 duration-300 hover:scale-105 hover:shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
            <Link href="project/sub-project-1">
              <div>
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
                />
              </div>
              <div>
                <h1 className="py-1">demo project</h1>
                <p>
                  this is just demo description of a project. Please fill in
                  prroject infomation later.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
