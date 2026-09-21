import Desc from "../Desc";
import Title from "../Title";

const HeaderTitle = ({ SubTitle, Titlee, Desce, changeTitleStyle }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-[2px] bg-teal-400"></span>
        <Title variant="text-teal-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
          {SubTitle}
        </Title>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8 sm:pb-10">
        <div className="max-w-2xl">
          <Title
            variant={`${
              changeTitleStyle ? "text-white" : "text-black"
            } text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight`}
          >
            {Titlee}
          </Title>
          <Desc variant="text-slate-400 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
            {Desce}
          </Desc>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;