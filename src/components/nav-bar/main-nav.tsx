import React, { lazy } from "react";
import { useLocation } from "react-router-dom";

const Span = () => (
  <span
    className="absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021] dark:bg-black"
    aria-hidden="true"
  ></span>
);

const ThemeSwitch = lazy(() => import("../theme-switch/ThemeSwitch"));
const Button = lazy(() => import("../common/button/button"));

function MainNav() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setIsActive] = React.useState("");
  const history = useLocation();
  console.log(history);

  return (
    <div className="hidden md:flex dark:bg-[#6C6C6C] bg-white justify-center items-center sticky top-0 left-0 w-full z-20">
      <header className="flex justify-between items-center my-[-20px]">
        <div className="">
          <a href="/">
            <img
              className="hidden dark:block mr-[70px]"
              src="/logo-dark.png"
              width={200}
              alt="Jam-forte Home"
            />
          </a>
          <a href="/">
            <img
              className="block dark:hidden mr-[70px]"
              src="/logo-light.png"
              width={200}
              alt="Jam-forte Home"
            />
          </a>
        </div>
        <nav className="flex items-center justify-center">
          <div className="relative">
            <a
              href="/#company"
              onClick={() =>
                history.pathname === "/"
                  ? setIsActive("Company")
                  : setIsActive("Company")
              }
              className={`${
                history.hash === "#company"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              Company
            </a>
            {history.hash === "#company" && <Span />}
          </div>
          <div className="relative">
            <a
              href="/#about"
              onClick={() => setIsActive("About")}
              className={`${
                history.hash === "#about"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              About
            </a>
            {history.hash === "#about" && <Span />}
          </div>
          <div className="relative">
            <a
              href="/#services"
              onClick={() => setIsActive("Services")}
              className={`${
                history.hash === "#services"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              Services
            </a>
            {history.hash === "#services" && <Span />}
          </div>
          <div className="relative">
            <a
              href="/team"
              onClick={() => setIsActive("Team")}
              className={`${
                history.pathname === "/team"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : "text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              Team
            </a>
            {history.pathname === "/team" && <Span />}
          </div>
          <a href="#contactUs">
            <Button
              type="button"
              className="dark:bg-[#fff] 
              dark:text-[#000] bg-black text-white p-[13px] 
              rounded-[10px] mr-[45px] text-sm shadow-[0px_5px_20px_#BDDFFF] dark:hover:text-[#fff] dark:hover:bg-[#000] 
              hover:text-[#f6d021]"
              aria-label="contact-us-button"
            >
              Contact us
            </Button>
          </a>
        </nav>
        <div className="flex items-center justify-center">
          <ThemeSwitch />
        </div>
      </header>
    </div>
  );
}

export default MainNav;
