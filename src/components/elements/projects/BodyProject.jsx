import { useState, useRef } from "react";
import Desc from "../Desc";
import SubTitle from "../SubTitle";
import Title from "../Title";

const COLLAPSED_COUNT = 2;

const BodyProject = ({
  role,
  application,
  desc,
  contributions = [],
  tools = [],
  image,
  demoUrl,
  year,
  reverse,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef(null);
  const isCollapsible = contributions.length > COLLAPSED_COUNT;
  const hiddenCount = contributions.length - COLLAPSED_COUNT;
  const visibleContributions =
    isCollapsible && !isExpanded
      ? contributions.slice(0, COLLAPSED_COUNT)
      : contributions;

  const host = demoUrl
    ? demoUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  const handleToggleExpand = () => {
    if (isExpanded && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    setIsExpanded((prev) => !prev);
  };

  const styleDefault =
    "relative z-10 overflow-hidden bg-black text-white px-2 py-1 md:px-5 md:py-2 rounded font-medium transition-colors duration-300 text-center " +
    "before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-teal-500 before:-z-10 " +
    "before:transition-all before:duration-300 before:ease-in-out hover:before:h-full hover:text-black ";

  return (
    <article className="group w-full overflow-hidden rounded border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/30 transition-colors duration-300 hover:border-teal-500/40 lg:h-[520px]">
      <div
        className={`flex h-full flex-col-reverse lg:grid lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex h-full min-h-0 flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 border-b border-slate-800 pb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <SubTitle variant="text-teal-300 text-xs font-semibold tracking-wide">
                {role}
              </SubTitle>
            </span>

            {year && (
              <span className="text-xs font-medium text-slate-500">{year}</span>
            )}
          </div>

          <div
            ref={scrollContainerRef}
            className={`mt-5 flex min-h-0 flex-1 flex-col gap-5 ${
              isExpanded
                ? "overflow-y-auto pr-3 [scrollbar-color:#334155_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar]:w-1.5"
                : "overflow-hidden"
            }`}
          >
            <div className="flex flex-col gap-3">
              <Title variant="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                {application}
              </Title>
              <Desc variant="text-slate-400 text-sm sm:text-base leading-relaxed max-w-prose">
                {desc}
              </Desc>
            </div>

            {contributions.length > 0 && (
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-slate-200">
                  Kontribusi saya
                </h4>
                <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-slate-300">
                  {visibleContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-teal-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {isCollapsible && (
            <button
              type="button"
              onClick={handleToggleExpand}
              aria-expanded={isExpanded}
              className="mt-1 shrink-0 self-start rounded text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            >
              {isExpanded
                ? "Tampilkan lebih sedikit"
                : `Lihat ${hiddenCount} kontribusi lainnya`}
            </button>
          )}

          <div className="mt-5 flex shrink-0 flex-col gap-4 border-t border-slate-800 pt-5">
            {tools.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <li
                    key={idx}
                    className="rounded border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            )}

            <div className="">
              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-2 overflow-hidden rounded bg-teal-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-0 before:w-full before:bg-slate-950 before:transition-all before:duration-300 before:ease-in-out hover:text-teal-400 hover:before:h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  Buka situsnya
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                    <path d="M5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z" />
                  </svg>
                </a>
              ) : (
                <p className="inline-flex items-center gap-2 rounded border border-dashed border-slate-700 px-4 py-2.5 text-sm text-slate-400">
                  Demo publik belum tersedia
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex min-h-0 items-center justify-center bg-slate-950/60 p-5 sm:p-8 lg:p-10">
          <figure className="flex h-full max-h-full w-full flex-col overflow-hidden rounded border border-slate-800 bg-slate-900">
            <figcaption className="flex shrink-0 items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              <span className="ml-2 truncate text-[11px] text-slate-500">
                {host || application.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </figcaption>

            <div className="flex min-h-[240px] w-full flex-1 items-center justify-center bg-slate-950 p-3">
              <img
                src={image}
                alt={`Tampilan antarmuka ${application}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        </div>
      </div>
    </article>
  );
};

export default BodyProject;
