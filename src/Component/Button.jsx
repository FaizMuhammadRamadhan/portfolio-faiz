import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Button = ({ type = "button", variant = "bg-black", children = "....." }) => {
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

  return (
    <motion.button
      type={type}
      className={`w-full ${variant} text-white py-3 rounded-lg font-semibold`}
      whileHover={!isMobile ? { scale: 1.1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)" } : {}}
      whileTap={isMobile ? { scale: 1.1 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
