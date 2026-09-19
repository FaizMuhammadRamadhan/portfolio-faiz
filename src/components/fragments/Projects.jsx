import BodyProject from "../elements/projects/BodyProject";
import HeaderTitle from "../elements/projects/HeaderTitle";

const Projects = ({ projectsData }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-500/10 rounded blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded blur-[150px] pointer-events-none -z-10" />

      <div className="mb-12 sm:mb-16">
        <HeaderTitle
          changeTitleStyle={true}
          SubTitle={"Featured Projects"}
          Titlee={"Project Yang Pernah Dibuat"}
          Desce={`Kumpulan hasil karya dan aplikasi web yang telah saya kembangkan, berfokus pada solusi fungsional, performa tinggi, dan pengalaman pengguna yang optimal.`}
        />
      </div>

      <div className="flex flex-col gap-y-10 sm:gap-y-16">
        {projectsData.map((project, index) => (
          <BodyProject
            key={project.id}
            index={index}
            role={project.role}
            application={project.application}
            desc={project.desc}
            tools={project.tools}
            image={project.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;