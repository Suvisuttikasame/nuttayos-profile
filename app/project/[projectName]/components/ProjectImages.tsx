import Image from "next/image";

type props = {
  images: string[];
};

export default function ProjectImages({ images = [] }: props) {
  return (
    <div className="w-128 flex flex-col gap-2 py-4">
      {images.map((item, index) => (
        <Image
          src={item}
          alt="project-pic"
          width={200}
          height={100}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="shadow-md rounded-md"
          key={index}
        />
      ))}
    </div>
  );
}
