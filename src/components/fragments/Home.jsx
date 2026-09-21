import { skills } from "../../data/skills";
import Card from "../elements/Card";
import BodyHome from "../elements/homes/BodyHome";
import CardIndex from "./CardIndex";

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen bg-gray-100 pt-20 p10b- lg:py-12 px-4 sm:px-8 lg:px-12">
        <div className="w-full lg:w-3/5 flex items-center">
          <BodyHome />
        </div>

        <div className="w-full lg:w-2/5 flex justify-center items-center p-4">
          <div className="relative flex justify-center items-center p-6 bg-white/40 backdrop-blur-sm sm:backdrop-blur-md rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-white/50 shadow-xl transition-all duration-500 hover:rounded-[50%_50%_30%_70%/50%_30%_70%_50%]">
            <img
              src="/images/profile.png"
              alt="Faiz Muhammad Ramadhan"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-2xl relative z-10"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-1 md:-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-slate-100 p-4 sm:p-6 rounded">
          {skills.map((item) => (
            <CardIndex
              key={item.id}
              title={item.title}
              subTitle={item.subtitle}
              desc={item.desc}
              titleVariant="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-200"
            >
              <Card.Tools tools={item.tools} />
            </CardIndex>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
