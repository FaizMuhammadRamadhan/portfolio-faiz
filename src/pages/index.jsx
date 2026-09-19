import Navbar from "../components/fragments/Navbar";
import Certificate from "../components/layouts/Certificate";
import Contact from "../components/layouts/Contact";
import Experience from "../components/layouts/Experience";
import HomePages from "../components/layouts/HomePages";
import ProjectPages from "../components/layouts/ProjectPages";

const Index = () => {
  return (
    <>
      <Navbar />
      <HomePages />
      <ProjectPages />
      <Experience />
      <Certificate />
      <Contact />
    </>
  );
};

export default Index;
