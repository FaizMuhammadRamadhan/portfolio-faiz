import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Certi() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkScreenSize(); // Cek saat komponen pertama kali dimuat
    window.addEventListener("resize", checkScreenSize); // Update saat resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const sertifikat = [
    {
      id: 1,
      title: "Belajar Dasar Pemrograman Web",
      provider: "Dicoding",
      date: "16 September 2024 - 16 September 2027",
      link: "https://www.dicoding.com/certificates/1RXYL569QPVM",
    },
    {
      id: 2,
      title: "Frontend Developer (React)",
      provider: "HackerRank",
      date: "13 October 2024",
      link: "https://www.hackerrank.com/certificates/iframe/8b6622e590c0",
    },
    {
      id: 3,
      title: "Belajar Dasar Pemrograman JavaScript",
      provider: "Dicoding",
      date: "30 November 2024 - 30 November 2027",
      link: "https://www.dicoding.com/certificates/MRZMY7YRLZYQ",
    },
    {
      id: 4,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      provider: "Dicoding",
      date: "13 December 2024 - 13 December 2027",
      link: "https://www.dicoding.com/certificates/L4PQ50M74ZO1",
    },
    {
      id: 5,
      title: "Belajar Membuat Aplikasi Web dengan React",
      provider: "Dicoding",
      date: "23 January 2025 - 23 January 2028",
      link: "https://www.dicoding.com/certificates/L4PQE4J12PO1",
    },
    {
      id: 6,
      title: "Belajar Dasar AI",
      provider: "Dicoding",
      date: "31 January 2025 - 31 January 2028",
      link: "https://www.dicoding.com/certificates/07Z63GMDMZQR",
    },
  ];

  return (
    <div className="bg-black py-10 px-6">
      {/* Title */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-16 h-0.5 bg-gray-300"></div>
        <h2 className="mx-4 text-3xl font-semibold text-gray-300 text-center uppercase tracking-wide">
          My Certification
        </h2>
        <div className="w-16 h-0.5 bg-gray-300"></div>
      </div>

      {/* Certification Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {sertifikat.map((certi) => (
          <motion.div
            key={certi.id}
            className="relative bg-slate-100 p-6 rounded-sm w-80 text-black shadow-lg flex flex-col justify-between h-[180px]"
            whileHover={
              !isMobile
                ? {
                    scale: 1.1,
                    boxShadow: "0px 4px 15px rgba(0, 255, 255, 0.5)",
                  }
                : {}
            }
            whileTap={isMobile ? { scale: 1.1 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Title */}
            <h3 className="text-lg font-semibold min-h-[60px]">
              {certi.title}
            </h3>

            {/* Provider & Date */}
            <div>
              <p className="text-black font-medium">{certi.provider}</p>
              <p className="text-sky-500 text-[12px]">{certi.date}</p>
            </div>

            {/* External Link Icon */}
            <div className="absolute top-1 right-2">
              <Link to={certi.link} className="cursor-pointer">
                <i className="ri-arrow-right-up-box-line text-2xl hover:text-sky-500"></i>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
