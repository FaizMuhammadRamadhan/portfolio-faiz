
import { skills } from "../../data/skills";
import Card from "../elements/Card";
import BodyHome from "../elements/homes/BodyHome";
import CardIndex from "./CardIndex";

const Home = () => {
  return (
    <>
      <div className="flex bg-gray-100 xl:mx-auto xl:justify-center pt-15">
        <div className="h-screen ">
          <div className="gap-y-4">
            <BodyHome />
          </div>
        </div>

        <div className="">
          <img src="/images/profile.png" alt="" className="h-screen xl:h-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 mb-4 bg-slate-100">
        {skills.map((item) => (
          <CardIndex
            key={item.id}
            title={item.title}
            subTitle={item.subtitle}
            desc={item.desc}
            titleVariant="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-200"
          >
            <Card.Tools tools={item.tools} />
          </CardIndex>
        ))}
      </div>
    </>
  );
};

export default Home;
