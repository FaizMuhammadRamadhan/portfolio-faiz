import Projects from "../fragments/Projects";
import { indexproject } from "../../data/indexproject";

const ProjectPages = () => {
  return (
    <div id="projects" className="bg-slate-950 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

      <Projects projectsData={indexproject} />
    </div>
  );
};

export default ProjectPages;