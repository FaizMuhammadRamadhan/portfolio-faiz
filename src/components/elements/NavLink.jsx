import { Link } from "react-router-dom";
import Button from "./Button";
import { navigation } from "../../data/navigation";

const NavLink = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <img
        src="/images/logo.png"
        alt="Logo"
        className="h-12 rounded-lg object-contain my-auto"
      />

      <div className="hidden md:flex">
        {navigation.map((itemlink) => (
          <a
            key={itemlink.id}
            href={itemlink.navigasi}
            onClick={(e) => handleScroll(e, itemlink.navigasi)}
            className="relative px-[69.7px] md:px-10 py-[17px] md:py-[24px] md:text-black transition-all duration-300 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-white md:before:bg-black before:transition-all before:duration-300 before:ease-in-out before:-z-10 hover:before:h-full text-white hover:text-black md:hover:text-white overflow-hidden"
          >
            {itemlink.nama}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <Cv>Download My CV</Cv>
      </div>
    </>
  );
};
const styleDefault =
  "relative z-10 overflow-hidden bg-black text-white px-2 py-1 md:px-5 md:py-2 rounded font-medium transition-colors duration-300 text-center " +
  "before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-teal-500 before:-z-10 " +
  "before:transition-all before:duration-300 before:ease-in-out hover:before:h-full hover:text-black ";

const Cv = ({ children }) => {
  return (
    <div>
      <Button variant={styleDefault}>{children}</Button>
    </div>
  );
};

NavLink.Cv = Cv;

export default NavLink;
