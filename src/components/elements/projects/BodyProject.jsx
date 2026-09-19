import Desc from "../Desc";
import SubTitle from "../SubTitle";
import Title from "../Title";

const BodyProject = ({ role, application, desc, tools, image, reverse, index }) => {
  const offsetClass = index % 2 === 0 ? "md:mr-16" : "md:ml-16";

  return (
    <div className={`w-full transition-all duration-300 ${offsetClass}`}>
      <div className="group relative w-full rounded p-[1px] bg-gradient-to-r from-teal-500/30 via-slate-700/40 to-teal-500/10 hover:from-teal-400 hover:via-teal-500/50 hover:to-teal-300/30 transition-all duration-500 shadow-2xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

        <div className="flex w-full overflow-hidden rounded bg-slate-900/90 backdrop-blur-xl relative">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

          <div
            className={`flex flex-col-reverse ${
              reverse ? "md:flex-row-reverse" : "md:flex-row"
            } w-full relative z-10`}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-y-6 p-6 sm:p-8 lg:p-10 justify-between">
              <div className="flex flex-col gap-y-3 sm:gap-y-4">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded bg-teal-400 animate-pulse"></span>
                    <SubTitle variant="text-slate-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                      {role}
                    </SubTitle>
                  </div>
                </div>

                <Title variant="text-teal-300 text-2xl sm:text-3xl font-bold tracking-wide group-hover:text-teal-200 transition-colors">
                  {application}
                </Title>

                <Desc variant="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {desc}
                </Desc>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <span className="text-xs text-slate-500 uppercase tracking-widest block mb-2 font-medium">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, idx) => (
                    <SubTitle
                      key={idx}
                      variant="border border-teal-500/30 bg-teal-500/10 rounded px-3 py-1 text-xs text-teal-300 font-medium hover:border-teal-400 transition-colors"
                    >
                      {tool}
                    </SubTitle>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative overflow-hidden bg-slate-950 aspect-video md:aspect-auto min-h-[240px] sm:min-h-[320px] group/img">
              <div
                className={`absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-r ${
                  reverse
                    ? "md:from-transparent md:to-slate-900"
                    : "md:from-slate-900 md:to-transparent"
                } from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover/img:opacity-40 transition-opacity duration-500`}
              />

              <img
                src={image}
                alt={application}
                className="w-full h-full object-cover object-top transform group-hover/img:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyProject;