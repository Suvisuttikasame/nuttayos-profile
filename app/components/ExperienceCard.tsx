import Image from "next/image";

type props = {
  clickedItem: string;
};
export default function ExperienceCard({ clickedItem }: props) {
  return (
    <div className="w-96 h-64 relative bg-[#F0EFF4] rounded-md [transform-style:preserve-3d] transition-all ease-in-out  duration-1000 delay-150 hover:[transform:rotateY(180deg)]">
      <div
        className={`${
          clickedItem === "Hocco" ? "block" : "hidden"
        } bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <h3>
          <span>role :</span> Full stack developer
        </h3>
        <div>
          <span>responsibility :</span>
          <div className="pt-1">
            <span>Part of software development department</span>
            <ul className="flex flex-col gap-2 list-disc p-4">
              <li>
                manage project resources(time, team and bugget) in production
                phase in order to be on schedule
              </li>
              <li>face problem sloving on production</li>
              <li>recover plan whenever project behind schedule</li>
              <li>test electrical system on sea before handover</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Hocco" ? "block" : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4 grid grid-cols-2 items-center justify-items-center`}
      >
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Denso International Asia Co.,Ltd"
            ? "block"
            : "hidden"
        } bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <h3>
          <span>role :</span> IoT engineer
        </h3>
        <div>
          <span>responsibility :</span>
          <div className="pt-1">
            <span>Part of lean automation business department</span>
            <ul className="flex flex-col gap-2 list-disc p-4">
              <li>
                manage project resources(time, team and bugget) in production
                phase in order to be on schedule
              </li>
              <li>face problem sloving on production</li>
              <li>recover plan whenever project behind schedule</li>
              <li>test electrical system on sea before handover</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Denso International Asia Co.,Ltd"
            ? "block"
            : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4 grid grid-cols-2 items-center justify-items-center`}
      >
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Turnkey Communication Services Co.,LTD."
            ? "block"
            : "hidden"
        } bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <h3>
          <span>role :</span> Electronic engineer
        </h3>
        <div>
          <span>responsibility :</span>
          <div className="pt-1">
            <span>Part of research and development department</span>
            <ul className="flex flex-col gap-2 list-disc p-4">
              <li>
                manage project resources(time, team and bugget) in production
                phase in order to be on schedule
              </li>
              <li>face problem sloving on production</li>
              <li>recover plan whenever project behind schedule</li>
              <li>test electrical system on sea before handover</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Turnkey Communication Services Co.,LTD."
            ? "block"
            : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4 grid grid-cols-2 items-center justify-items-center`}
      >
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Marsun" ? "block" : "hidden"
        } bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <h3>
          <span>role :</span> Electrical engineer
        </h3>
        <div>
          <span>responsibility :</span>
          <div className="pt-1">
            <span>Part of production department</span>
            <ul className="flex flex-col gap-2 list-disc p-4">
              <li>
                manage project resources(time, team and bugget) in production
                phase in order to be on schedule
              </li>
              <li>face problem sloving on production</li>
              <li>recover plan whenever project behind schedule</li>
              <li>test electrical system on sea before handover</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Marsun" ? "block" : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4 grid grid-cols-2 items-center justify-items-center`}
      >
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
        <div className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)] w-32">
          <Image
            src="/asset/demo-pic.jpg"
            alt="marsun-1"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
