import BodyProject from "../elements/projects/BodyProject";
import HeaderTitle from "../elements/projects/HeaderTitle";

const Projects = ({ projectsData }) => {
  return (
    <div className="">
      <div className="pt-16 pb-8 px-20">
        <HeaderTitle
        changeTitleStyle={true}
          SubTitle={"Featured Projects"}
          Titlee={"Project Yang Pernah Dibuat"}
          Desce={`Kumpulan hasil karya dan aplikasi web yang telah saya kembangkan,
              berfokus pada solusi fungsional, performa tinggi, dan pengalaman
              pengguna yang optimal.`}
        />
      </div>

      <div className="py-10 px-20 flex flex-col gap-y-12">
        {projectsData.map((project, index) => (
          <BodyProject
            key={project.id}
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
