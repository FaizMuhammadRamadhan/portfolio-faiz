import NavLink from "../elements/NavLink";

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-md ">
        <nav className="justify-between flex items-center fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 flex justify-between items-center">
          <NavLink />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
