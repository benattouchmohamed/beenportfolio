import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 py-4 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-xl font-bold cursor-pointer">
            M.Benattouch
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-lg font-medium cursor-pointer ${
                active === nav.title ? "text-white" : "text-gray-300"
              } ${
                ["About", "Work", "Contact"].includes(nav.title)
                  ? "hover:text-[#915EFF] transition-colors duration-300"
                  : "hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div className="absolute right-4 top-16 bg-primary p-4 rounded-lg shadow-lg z-10">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-lg font-medium cursor-pointer ${
                      active === nav.title ? "text-white" : "text-gray-300"
                    } ${
                      ["About", "Work", "Contact"].includes(nav.title)
                        ? "hover:text-[#915EFF] transition-colors duration-300"
                        : "hover:text-white"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
