import { useState, useEffect } from "react";
import NavLink from "../elements/NavLink";
import Button from "../elements/Button";
import { navigation } from "../../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleDownloadCV = () => {
    setIsOpen(false);
    const link = document.createElement("a");
    link.href = "/doc/cv.pdf";
    link.download = "cv-faiz.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="justify-between flex items-center fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-md shadow-sm px-6 py-2.5 md:py-0">
        <NavLink />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black focus:outline-none z-50 ml-auto rounded-lg active:scale-95 transition-transform"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 min-h-screen w-screen bg-black/60 backdrop-blur-sm z-40 md:hidden cursor-pointer"
          />
        )}

        <div
          className={`fixed top-0 right-0 h-screen w-fit min-w-[240px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 rounded-l-3xl shadow-2xl z-50 px-8 py-10 flex flex-col justify-between items-end transform transition-all duration-300 ease-out md:hidden ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full flex justify-between items-center pb-6 border-b border-slate-800">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-9 rounded-md object-contain filter brightness-200"
            />
          </div>

          <div className="flex flex-col items-end gap-6 my-auto w-full">
            {navigation.map((itemlink) => (
              <a
                key={itemlink.id}
                href={itemlink.navigasi}
                onClick={(e) => handleScroll(e, itemlink.navigasi)}
                className="text-slate-300 hover:text-teal-400 font-medium text-lg transition-all duration-200 transform hover:-translate-x-1 text-right"
              >
                {itemlink.nama}
              </a>
            ))}
          </div>

          <div className="w-full py-6 border-t border-slate-800 flex justify-end">
            <a
              href="/doc/cv-faiz.pdf"
              download="cv-faiz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button variant="w-full text-black bg-teal-400 hover:bg-teal-300 font-medium py-2.5 px-5 rounded text-sm transition-colors text-center shadow-lg shadow-teal-500/10">
                Download My CV
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
