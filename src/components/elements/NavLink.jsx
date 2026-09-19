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
      <img src="/images/logo.png" alt="Logo" className="h-13 rounded-lg" />
      <div className="flex">
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
      <Cv>Download My CV</Cv>
    </>
  );
};

const Cv = ({ children }) => {
  return (
    <div>
      <Button variant="text-white bg-black py-2 px-4 rounded-lg">
        {children}
      </Button>
    </div>
  );
};

NavLink.Cv = Cv;

export default NavLink;
