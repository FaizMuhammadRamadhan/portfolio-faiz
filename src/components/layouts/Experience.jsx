import { useState } from "react";
import HeaderTitle from "../elements/projects/HeaderTitle";
import Title from "../elements/Title";
import Desc from "../elements/Desc";
import CardIndex from "../fragments/CardIndex";
import { experienceData } from "../../data/experiencedata";

const TaskItemList = ({ points }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visiblePoints = isExpanded ? points : points.slice(0, 2);

  return (
    <div className="mt-2">
      <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
        {visiblePoints.map((point, index) => (
          <li key={index} className="leading-relaxed">
            {point}
          </li>
        ))}
      </ul>

      {points.length > 2 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-teal-600 font-semibold hover:underline mt-2 cursor-pointer block"
        >
          {isExpanded ? "Sembunyikan" : "Selengkapnya..."}
        </button>
      )}
    </div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);
  const selectedData = experienceData.find((item) => item.id === activeTab);

  return (
    <div id="experience" className="max-w-6xl mx-auto px-4 py-10">
      <HeaderTitle
        changeTitleStyle={false}
        SubTitle={"CAREER & EXPERIENCE"}
        Titlee={"My Professional Journey"}
        Desce={`A timeline of my practical work experience, technical contributions, and impact delivered across web development projects.`}
      />

      <div className="flex flex-col md:flex-row gap-8 mt-10">
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          {experienceData.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left p-4 rounded-xl border-l-4 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-teal-500 bg-teal-50/50"
                    : "border-transparent hover:bg-slate-50"
                }`}
              >
                <h2
                  className={`font-semibold text-sm ${
                    isActive ? "text-teal-600" : "text-slate-700"
                  }`}
                >
                  {item.company}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">{item.role}</p>
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-2/3 bg-slate-50/60 border border-slate-200 p-8 rounded-2xl">
          <div className="mb-6">
            <Title variant="text-xl font-bold text-slate-800">
              {selectedData.title}{" "}
              <span className="text-teal-600">@ {selectedData.company}</span>
            </Title>
            <Desc variant="text-xs text-slate-400 mt-1">
              {selectedData.subtitle}
            </Desc>
          </div>

          <div className="flex flex-col gap-4">
            {selectedData.tasks.map((task) => (
              <CardIndex
                key={task.id}
                title={task.title}
                subTitle={task.badge}
                titleVariant="text-sm font-bold text-slate-800"
                subTitleVariant={`px-2.5 py-1 rounded-md text-[10px] font-semibold w-fit ${task.badgeColor}`}
              >
                <TaskItemList points={task.points} />
              </CardIndex>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;