import { FcReading, FcFilmReel } from "react-icons/fc";

type props = {
  clickedItem: string;
};

export default function DefaultCard({ clickedItem }: props) {
  return (
    <>
      <div
        className={`${
          clickedItem === "" ? "block" : "hidden"
        } bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4 flex flex-col justify-center items-center gap-11`}
      >
        <h1 className="text-3xl font-black">EXP</h1>
        <FcReading size="100px" />
      </div>
      <div
        className={`${
          clickedItem === "" ? "block" : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4 flex flex-col justify-center items-center gap-11`}
      >
        <h1 className="text-3xl font-black">MEM</h1>
        <FcFilmReel size="100px" />
      </div>
    </>
  );
}
