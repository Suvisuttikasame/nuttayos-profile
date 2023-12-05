type props = {
  clickedItem: string;
};
export default function ExperienceCard({ clickedItem }: props) {
  return (
    <div className="w-96 h-64 relative bg-[#F0EFF4] rounded-md p-4 [transform-style:preserve-3d] transition-all ease-in-out  duration-1000 delay-150 hover:[transform:rotateY(180deg)]">
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
          <p>content1</p>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Hocco" ? "block" : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <p>picture1</p>
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
          <p>content2</p>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Denso International Asia Co.,Ltd"
            ? "block"
            : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <p>picture2</p>
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
          <p>content3</p>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Turnkey Communication Services Co.,LTD."
            ? "block"
            : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <p>picture3</p>
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
          <p>content4</p>
        </div>
      </div>
      <div
        className={`${
          clickedItem === "Marsun" ? "block" : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <p>picture4</p>
      </div>
    </div>
  );
}
