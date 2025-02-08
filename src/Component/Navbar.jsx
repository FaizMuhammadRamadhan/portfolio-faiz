import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show]);

  let menuAktif = show ? "right-0" : "-right-full";

  return (
    <motion.div
      className="navbar fixed z-[999] w-full py-4 -mt-1 shadow-xl backdrop-blur-[10px]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container px-4">
        <div className="navbar-box flex justify-between mx-auto md:py-1 items-center">
          <div className="logo">
            <img src="logo.png" alt="" className="w-10  rounded-lg" />
          </div>
          <ul
            ref={menuRef}
            className={`absolute z-[99] top-16 text-right ${menuAktif} w-47 text-white md:text-black bg-black transition-all md:flex md:gap- md:w-auto md:static md:bg-transparent`}
          >
            <li className="py-4 relative md:pr-0 md:py-0">
              <a
                href="#About"
                className="relative px-[69.7px] md:px-10 py-[17px] md:py-[24px] md:text-black transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-white md:before:bg-black before:transition-all before:duration-300 before:ease-in-out before:-z-10 hover:before:h-full text-white hover:text-black md:hover:text-white overflow-hidden"
              >
                About
              </a>
            </li>
            <li className="py-4 relative md:pr-0 md:py-0">
              <a
                href="#Experience"
                className="relative px-[50.5px] md:px-6 py-[17px] md:py-[24px] md:text-black transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-white md:before:bg-black before:transition-all before:duration-300 before:ease-in-out before:-z-10 hover:before:h-full text-white hover:text-black md:hover:text-white overflow-hidden"
              >
                Experience
              </a>
            </li>
            <li className="py-4 relative md:pr-0 md:py-0">
              <a
                href="#Contact"
                className="relative px-[61.3px] md:px-10 py-[17px] md:py-[24px] md:text-black transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-white md:before:bg-black before:transition-all before:duration-300 before:ease-in-out before:-z-10 hover:before:h-full text-white hover:text-black md:hover:text-white overflow-hidden"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="menu transition-all">
            <i
              ref={iconRef}
              onClick={handleClick}
              className="ri-menu-line md:hidden text-2xl cursor-pointer"
            ></i>
            <a
              href="/CV-Faiz.pdf"
              download="CV-Faiz.pdf"
              className="absolute right-14 -mt-0.5 cursor-pointer z-[99px] md:top-[15px] items-center md:block text-sm bg-black text-white py-2 px-3 rounded-full hover:shadow-2xl"
            >
              My CV
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
