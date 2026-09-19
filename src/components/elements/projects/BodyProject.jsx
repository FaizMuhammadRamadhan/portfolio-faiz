import Desc from "../Desc";
import SubTitle from "../SubTitle";
import Title from "../Title";

const BodyProject = ({ role, application, desc, tools, image, reverse }) => {
  return (
    <div className="flex w-full overflow-hidden border border-slate-700/50 shadow-2xl">
      <div
        className={`flex flex-col md:flex-row w-full ${reverse ? "md:flex-row-reverse" : "mend"}`}
      >
        <div className="md:w-1/2 flex flex-col gap-y-6 px-10 py-12 bg-slate-900/80 backdrop-blur-md z-10 justify-between">
          <div className="flex flex-col gap-y-4">
            <SubTitle variant="text-slate-400 text-lg font-medium">
              {role}
            </SubTitle>
            <Title variant="text-teal-300 text-3xl font-bold tracking-wide">
              {application}
            </Title>
            <Desc variant="text-slate-200 text-base leading-relaxed">
              {desc}
            </Desc>
          </div>

          <div className="text-white flex flex-wrap gap-3 py-2">
            {tools.map((tool, idx) => (
              <SubTitle
                key={idx}
                variant="border border-teal-500/40 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300 font-medium"
              >
                {tool}
              </SubTitle>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/30 to-transparent z-10" />
          <img
            src={image}
            alt={application}
            className="w-full h-full object-cover object-left-top transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyProject;
