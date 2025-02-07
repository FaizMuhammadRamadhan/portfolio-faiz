import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Text from "./Text";

const Contentlist = [
  { id: 1, foto: "/images/html.png", nama: "HTML" },
  { id: 2, foto: "/images/css.png", nama: "CSS" },
  { id: 3, foto: "/images/javascript.png", nama: "Javascript" },
  { id: 4, foto: "/images/figma.png", nama: "Figma" },
  { id: 5, foto: "/images/react.png", nama: "ReactJS" },
  { id: 6, foto: "/images/tailwind.png", nama: "Tailwind" },
  { id: 7, foto: "/images/bootstrap.png", nama: "Bootstrap" },
  { id: 8, foto: "/images/Laravell.png", nama: "Laravel" },
];

const About = () => {
  const text = "Front-End Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Deteksi apakah perangkat mobile
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="About">
      <div className="content absolute top-40 mx-4 lg:mx-10">
        {/* Animasi teks muncul dari bawah */}
        <motion.div
          className="text -mt-4 pb-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Text variant="">Hello, my name is</Text>

          <h1 className="text-5xl lg:text-7xl text-teal-500 tracking-tight font-bold mt-3">
            <span className="block">Faiz</span>
            <span className="block text-black">Muhammad</span>
            <span className="block text-black text-right md:text-left lg:text-left lg:tracking-wide">
              Ramadhan<span className="text-3xl lg:text-5xl">.</span>
            </span>
          </h1>

          <Text variant="text-right lg:mt-3 text-xl font-semibold right-4 md:text-left lg:text-left">
            I'm a{" "}
            <span className="text-teal-500 font-semibold lg:tracking-widest">
              {displayedText}
            </span>
          </Text>
        </motion.div>

        {/* Animasi gambar profile muncul dari kiri */}
        <motion.div
          className="profile mt-4 md:absolute lg:absolute md:-top-17 lg:-top-17 lg:right-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="/Profile.png"
            alt=""
            className="bg-slate-200 rounded-tl-4xl rounded-br-4xl hover:bg-slate-300 md:h-64 md:px-3 md:ml-86 lg:h-64 lg:px-22"
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Animasi teks About Me muncul dari kanan */}
        <div className="deskripsi mt-10 lg:mt-9">
          <hr className="w-50 right-0 border mt-11 lg:mt-0 lg:block md:w-52 md:top-55 md:right-48 lg:w-51 absolute lg:right-89 lg:border lg:top-65" />
          <h1 className="text-4xl italic md:not-italic lg:not-italic font-extrabold tracking-widest md:absolute md:right-48 md:top-55 lg:absolute lg:right-89 lg:top-55 md:flex lg:flex">
            ABOUT <span className="textri block text-teal-500">ME</span>
          </h1>
          <motion.h1
            className="text-justify mt-3 md:mt-18 md:ml-87 lg:-mt-10 md:w-100 lg:w-140 lg:ml-155"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello! I am passionate about website developer, especially frontend
            with ReactJS, Vite, and Tailwind CSS, which I am currently
            exploring. With a strong eagerness to learn and good communication
            skills, I am ready to collaborate to create high-performance and
            high-quality digital solutions.
          </motion.h1>
        </div>

        {/* Skill Cards */}
        <div className="md:-mt-55 lg:-mt-28">
          <h1 className="font-semibold text-sm w-72 pt-2 text-left text-black tracking-widest">
            Technologies I’m Skilled In
          </h1>
          <div className="relative lg:w-110 flex -mt-2">
            <div className="grid grid-cols-4 lg:grid-cols-8 lg:w-full py-4 rounded-lg">
              {Contentlist.map((List) => (
                <motion.div
                  key={List.id}
                  className="w-[98%] md:w-18 lg:w-14 opacity-40 py-1 flex flex-col hover:opacity-100 z-[99] group"
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.1,
                          boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.5)",
                        }
                      : {}
                  }
                  whileTap={
                    isMobile
                      ? {
                          scale: 1.1,
                          boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.5)",
                        }
                      : {}
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img src={List.foto} alt={List.nama} className="w-full" />
                  <Text variant="font-bold text-[12px] lg:text-[7px] text-white text-center group-hover:text-black">
                    {List.nama}
                  </Text>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Judul = (props) => {
  const { variant, children } = props;
  return (
    <h1 className={`text-4xl font-bold tracking-widest ${variant}`}>
      {children}
    </h1>
  );
};

About.Judul = Judul;

export default About;
