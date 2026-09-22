import BodyProject from "../elements/projects/BodyProject";
import HeaderTitle from "../elements/projects/HeaderTitle";

const SquareGrid = () => (
  <div aria-hidden="true" className="flex flex-col items-center gap-6">
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 bg-teal-400"
          style={{ opacity: 0.35 - Math.floor(i / 3) * 0.05 }}
        />
      ))}
    </div>
    <span className="h-24 w-px bg-gradient-to-b from-teal-500/40 to-transparent" />
    <span className="h-3 w-3 border border-teal-500/40" />
  </div>
);

const Projects = ({ projectsData }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="mb-12 sm:mb-16">
        <HeaderTitle
          changeTitleStyle={true}
          SubTitle={"FEATURED PROJECTS"}
          Titlee={"Selected Works & Applications"}
          Desce={`A showcase of web applications I have built, focusing on functional solutions, scalable backend logic, and intuitive user experiences.`}
        />
      </div>

      <div className="flex flex-col gap-y-12 sm:gap-y-16">
        {projectsData.map((project, index) => {
          const shiftRight = index % 2 !== 0;

          return (
            <div
              key={project.id}
              className={`flex items-center gap-8 ${
                shiftRight ? "" : "lg:flex-row-reverse"
              } ${shiftRight ? "lg:translate-y-6" : ""}`}
            >
              <div className="w-full lg:w-[92%]">
                <BodyProject
                  role={project.role}
                  application={project.application}
                  desc={project.desc}
                  contributions={project.contributions}
                  tools={project.tools}
                  image={project.image}
                  demoUrl={project.demoUrl}
                  year={project.year}
                  reverse={shiftRight}
                />
              </div>

              {/* Sisi kosong: diisi kisi kotak teal */}
              <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                <SquareGrid />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;