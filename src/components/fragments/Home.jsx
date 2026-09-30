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
          <div className="relative group w-full max-w-md flex justify-center items-end">
            {/* Gradient background */}
            <div
              className="
        absolute
        w-[320px]
        h-[320px]
        sm:w-[380px]
        sm:h-[380px]
        lg:w-[400px]
        lg:h-[400px]

        rounded-full

        bg-gradient-to-br
        from-teal-100
        via-slate-100
        to-cyan-100

        opacity-80
        blur-[2px]

        transition-all
        duration-700
        ease-out

        group-hover:scale-110
        group-hover:rotate-6
      "
            />

            <div
              className="
        absolute
        bottom-4
        w-[230px]
        h-[45px]

        bg-slate-400/20
        blur-2xl
        rounded-full

        transition-all
        duration-700

        group-hover:w-[270px]
        group-hover:bg-teal-400/20
      "
            />

            {/* Foto */}
            <img
              src="/images/profile.webp"
              alt="Profile Faiz Muhammad Ramadhan"
              className="
        relative
        z-10

        w-full
        max-w-xs
        sm:max-w-sm
        lg:max-w-md

        h-auto
        object-contain

        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]

        drop-shadow-[0_20px_20px_rgba(0,0,0,0.12)]

        group-hover:-translate-y-5
        group-hover:scale-[1.04]
        group-hover:drop-shadow-[0_35px_30px_rgba(0,0,0,0.18)]
      "
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              width="400"
              height="400"
            />

            {/* Decorative circle */}
            <div
              className="
        absolute
        top-8
        right-8

        w-3
        h-3

        rounded-full
        bg-teal-500

        opacity-70

        transition-all
        duration-500

        group-hover:scale-150
        group-hover:opacity-100
      "
            />

            {/* Decorative small line */}
            <div
              className="
        absolute
        bottom-24
        left-6

        w-10
        h-[2px]

        bg-teal-500/50

        transition-all
        duration-500

        group-hover:w-16
        group-hover:bg-teal-500
      "
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
