import Projects from "../fragments/Projects";
import { indexproject } from "../../data/indexproject";
const ProjectPages = () => {
  return (
    <div id="projects" className="bg-black p-4 min-h-screen">
      <Projects projectsData={indexproject} />
    </div>
  );
};

export default ProjectPages;