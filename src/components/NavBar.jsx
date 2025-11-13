import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import img from "../assets/images/logo-light.png";
import { NavLink } from "react-router-dom";
import HomeDropDown from "./HomeDropDown";
import SideNavBar from "./SideNavBar";

function NavBar() {
  const [isOpen, setDropDown] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleDropDown = () => {
    setDropDown(!isOpen);
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <nav className="w-full h-24">
        <div className="flex justify-between items-end bg-transparent h-24">
          <div>
            <NavLink>
              <img src={img} className="h-6 pl-20" />
            </NavLink>
          </div>

          <div>
            <ul className="flex gap-10 pr-20 text-[12px]">
              <NavLink to={""}>
                <li
                  onMouseEnter={() => handleDropDown(true)}
                  onMouseLeave={() => handleDropDown(false)}
                >
                  HOME
                  {isOpen ? (
                    <div className="absolute top-30 -left-50% right-60">
                      <HomeDropDown />
                    </div>
                  ) : null}
                </li>
              </NavLink>
              <NavLink to={""}>
                <li>PAGES</li>
              </NavLink>
              <NavLink to={""}>
                <li>BLOGS</li>
              </NavLink>
              <NavLink to={""}>
                <li>CONTACT</li>
              </NavLink>

              {/* Menu Icon */}
              <NavLink to={""}>
                <li
                  className="text-[22px] cursor-pointer"
                  onClick={toggleSideBar}
                >
                  <IoMenu />
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <SideNavBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
    </>
  );
}

export default NavBar;
