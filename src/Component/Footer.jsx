import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mr-4 ml-4 md:mr-8 md:ml-12 px-4 pt-3 pb-7 bg-black">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-12" />
        <h1 className="text-white">Faiz</h1>
      </div>
      <a
        href="/CV-Faiz.pdf"
        download="CV-Faiz.pdf"
        className="hidden md:blockcursor-pointer z-[99px] w-36 mt-2 items-center md:block text-sm bg-slate-200 text-black py-2 px-3 rounded-sm hover:shadow-2xl"
      >
        Download My CV
      </a>
      <h1 className="text-center text-slate-200 mt-4 md:mt-5 lg:mt-0">
        © Copyright 2025 Faiz Muhammad Ramadhan | All Rights Reserved
      </h1>
      <div className="flex absolute right-10 md:right-15 lg:right-20 -mt-24.5 md:-mt-27 lg:-mt-21 items-center gap-3">
        <Link to="https://www.instagram.com/faizzzz_z/?next=%2F">
          <i className="ri-instagram-line text-slate-200 text-3xl"></i>
        </Link>
        <Link to="https://github.com/FaizMuhammadRamadhan">
          <i className="ri-github-fill text-slate-200 text-3xl"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/faiz-muhammad-ramadhan/">
          <i className="ri-linkedin-box-fill text-slate-200 text-3xl"></i>
        </Link>
        <div className="hidden md:block bg-slate-200 h-20 w-0.5"></div>
        <div className="text-slate-200 hidden md:block">
          <a href="#About" className="block">
            About
          </a>
          <a href="#Experience" className="block">
            Experience
          </a>
          <a href="#Contact" className="block">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
