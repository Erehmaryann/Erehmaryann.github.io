import React, { lazy } from "react";
import { NavLink, Link } from "react-router-dom";

const ThemeSwitch = lazy(() => import("../theme-switch/ThemeSwitch"));
const Button = lazy(() => import("../common/button/button"));

function MainNav() {
  return (
    <div className="hidden md:flex dark:bg-[#6C6C6C] bg-white justify-center items-center sticky top-0 left-0 w-full z-20">
      <header className="flex justify-between items-center my-[-20px]">
        <div className="">
          <Link to="#hero">
            <img
              className="hidden dark:block mr-[70px]"
              src="/logo-dark.png"
              width={200}
              alt="Jam-forte Home"
            />
          </Link>
          <Link to="#hero">
            <img
              className="block dark:hidden mr-[70px]"
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
                  "text-[#999999] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]",
                  isActive
                    ? "active:text-[#F6D021] dark:active:text-[#000]"
                    : undefined,
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
                  "text-[#999999] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]",
                  isActive
                    ? "active:text-[#F6D021] dark:active:text-[#000]"
                    : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              About
            </NavLink>
            <span
              className="active:absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021] dark:bg-black"
              aria-hidden="true"
            ></span>
          </div>
          <div className="relative">
            <NavLink
              to="#"
              className={({ isActive }) =>
                [
                  "text-[#999999] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]",
                  isActive
                    ? "active:text-[#F6D021] dark:active:text-[#000]"
                    : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Services
            </NavLink>
            <span
              className="active:absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021] dark:bg-black"
              aria-hidden="true"
            ></span>
          </div>
          <div className="relative">
            <NavLink
              to="#"
              className={({ isActive }) =>
                [
                  "text-[#999999] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]",
                  isActive
                    ? "active:text-[#F6D021] dark:active:text-[#000]"
                    : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Team
            </NavLink>
            <span
              className="active:absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021] dark:bg-black"
              aria-hidden="true"
            ></span>
          </div>
          <Link to="">
            <Button
              type="button"
              className="dark:bg-[#fff] 
              dark:text-[#000] bg-black text-white p-[13px] 
              rounded-[10px] mr-[45px] text-sm shadow-[0px_5px_20px_#BDDFFF] dark:hover:text-[#fff] dark:hover:bg-[#000] 
              hover:text-[#f6d021]"
            >
              Contact us
            </Button>
          </Link>
        </nav>
        <div className="flex items-center justify-center">
          <ThemeSwitch />
        </div>
      </header>
    </div>
  );
}

export default MainNav;
