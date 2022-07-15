import React, { lazy } from "react";
import { NavLink, Link } from "react-router-dom";

const ThemeSwitch = lazy(() => import("../theme-switch/ThemeSwitch"));

function MainNav() {
  return (
    <div className="md:flex dark:bg-[#6C6C6C] bg-white justify-center items-center">
      <header className="flex justify-between items-center">
        <div className="">
          <Link to="/">
            <img
              className="hidden dark:block mr-14"
              src="/logo-dark.png"
              width={200}
              alt="Jam-forte Home"
            />
          </Link>
          <Link to="/">
            <img
              className="block dark:hidden mr-14"
              src="/logo-light.png"
              width={200}
              alt="Jam-forte Home"
            />
          </Link>
        </div>
        <nav className="flex justify-center items-center">
          <div className="relative">
            <NavLink
              to="#"
              className={({ isActive }) =>
                [
                  "text-black dark:text-white px-[20px] relative",
                  isActive ? "active:text-[#F6D021]" : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Company
            </NavLink>
            <span
              className="active:absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021]"
              aria-hidden="true"
            ></span>
          </div>
          <div className="relative">
            <NavLink
              to="#"
              className={({ isActive }) =>
                [
                  "text-black dark:text-white px-[20px] relative",
                  isActive ? "active:text-[#F6D021]" : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              About
            </NavLink>
            <span
              className="active:absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021]"
              aria-hidden="true"
            ></span>
          </div>
          <div className="relative">
            <NavLink
              to="#"
              className={({ isActive }) =>
                [
                  "text-black dark:text-white px-[20px] relative",
                  isActive ? "active:text-[#F6D021]" : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Services
            </NavLink>
            <span
              className="active:absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021]"
              aria-hidden="true"
            ></span>
          </div>
          <div className="relative">
            <NavLink
              to="#"
              className={({ isActive }) =>
                [
                  "text-black dark:text-white px-[20px] relative",
                  isActive ? "active:text-[#F6D021]" : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Team
            </NavLink>
            <span
              className="active:absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021]"
              aria-hidden="true"
            ></span>
          </div>
        </nav>
        <div className="flex items-center justify-center">
          <ThemeSwitch />
        </div>
      </header>
    </div>
  );
}

export default MainNav;
