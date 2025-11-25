import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import img from "../assets/images/logo-light.png";
import { Link, NavLink } from "react-router-dom";
import HomeDropDown from "./HomeDropDown";
import SideNavBar from "./SideNavBar";

const NavBar = () => {
  const [isOpen, setDropDown] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [active, setActive] = useState("/");

  const toggleSideBar = () => setShowSideBar(!showSideBar);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full relative z-20 text-white bg-transparent">
        <div className="flex items-center justify-between px-6 md:px-20 py-3">

          {/* LOGO */}
          <Link to="/">
            <img
              src={img}
              className="h-6 cursor-pointer transition-all duration-300 hover:scale-105"
              alt="logo"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

            {/* HOME + DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
            >
              <NavLink
                to="/"
                onClick={() => setActive("/")}
                className={`transition-all duration-300 hover:text-white ${
                  active === "/" ? "text-white font-bold" : "text-white/70"
                }`}
              >
                HOME
              </NavLink>

              {isOpen && (
                <div className="absolute top-7 left-0 bg-white text-black shadow-xl rounded-xl p-4 animate-fadeIn">
                  <HomeDropDown />
                </div>
              )}
            </div>

            <NavLink
              to="/our-services"
              onClick={() => setActive("/our-services")}
              className={({ isActive }) =>
                `hover:text-white transition-all duration-300 ${
                  isActive ? "text-white font-bold" : "text-white/70"
                }`
              }
            >
              OUR SERVICES
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setActive("/about")}
              className={({ isActive }) =>
                `hover:text-white transition-all duration-300 ${
                  isActive ? "text-white font-bold" : "text-white/70"
                }`
              }
            >
              ABOUT US
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setActive("/contact")}
              className={({ isActive }) =>
                `hover:text-white transition-all duration-300 ${
                  isActive ? "text-white font-bold" : "text-white/70"
                }`
              }
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/testimonial"
              onClick={() => setActive("/testimonial")}
              className={({ isActive }) =>
                `hover:text-white transition-all duration-300 ${
                  isActive ? "text-white font-bold" : "text-white/70"
                }`
              }
            >
              TESTIMONIAL
            </NavLink>
          </ul>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSideBar}
              className="text-3xl hover:text-white transition-all duration-300"
            >
              <IoMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <SideNavBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
    </>
  );
};

export default NavBar;
