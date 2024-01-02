import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    projectName: "fast-pizza-co",
    description: "A small pizza shop with web application for practice.",
    image: "/asset/hero-fast-pizza-co.png",
  },
  {
    projectName: "world-wise-react",
    description: "An location tracking web application for practice.",
    image: "/asset/hero-world-wise.png",
  },
  {
    projectName: "Proshop",
    description: "An ecommerce platform.",
    image: "/asset/hero-propshop.png",
  },
  {
    projectName: "smart-farm",
    description:
      "A drip irridation system farm for local people to save water during dry season.",
    image: "/asset/demo-pic.jpg",
  },
];

export default function Project() {
  return (
    <main className="text-xs flex-1">
      <div className="flex flex-col justify-center items-center gap-8">
        <section className="w-3/4 grid grid-cols-2 gap-4 max-[550px]:grid-cols-1">
          {projects.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                projectName={item.projectName}
                description={item.description}
                image={item.image}
                index={index}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
