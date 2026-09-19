const Card = ({ children, variant = `group relative p-6 bg-white border border-slate-200/80 
                 shadow-md hover:shadow-2xl transition-all duration-300 ease-out 
                 hover:-translate-y-3 flex flex-col gap-y-4 overflow-hidden` }) => {
  return (
    <div
      className={variant}
    >
      {children}
    </div>
  );
};

const Tools = ({ tools = [] }) => {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-1 group/tool"
        >
          <div className="p-3 w-20 h-20 bg-white border border-slate-200 rounded-xl flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:-rotate-3 hover:bg-white hover:border-teal-400 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
            <img
              src={tool.src}
              alt={tool.name}
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>
          <span className="text-xs text-slate-500 font-medium group-hover/tool:text-teal-600 transition-colors">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
};

Card.Tools = Tools;

export default Card;
