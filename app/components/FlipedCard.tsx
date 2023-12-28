import Image from "next/image";
type props = {
  clickedItem: string;
  companyName: string;
  role: string;
  responsibility: string;
  listInfo: string[];
  images: {
    url: string;
    alt: string;
  }[];
};

export default function FlipedCard({
  clickedItem,
  companyName,
  role,
  responsibility,
  listInfo,
  images,
}: props) {
  return (
    <>
      <div
        className={`${
          clickedItem === companyName ? "block" : "hidden"
        } bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        <h3>
          <span className="text-sm font-medium">Role :</span> {role}
        </h3>
        <div>
          <span className="text-sm font-medium">Responsibility :</span>
          <div className="pt-1">
            <span>{responsibility}</span>
            <ul className="flex flex-col gap-2 list-disc p-4">
              {listInfo.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          clickedItem === companyName ? "block" : "hidden"
        } [transform:rotateY(180deg)] bg-[#FFF] shadow-md absolute w-full h-full [backface-visibility:hidden] rounded-md p-4`}
      >
        {images.map((item, index) => {
          return (
            <div
              className="overflow-hidden rounded-md drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]"
              key={index}
            >
              <Image src={item.url} alt={item.alt} width={500} height={500} />
            </div>
          );
        })}
      </div>
    </>
  );
}
