import React, { lazy } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const ThemeSwitch = lazy(() => import("../theme-switch/ThemeSwitch"));
const Button = lazy(() => import("../common/button/button"));

const Span = () => (
  <span
    className="absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#ff9c00] dark:bg-black"
    aria-hidden="true"
  ></span>
);

function MainNav() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setIsActive] = React.useState("company");
  const history = useLocation();
  let navigate = useNavigate();

  return (
    <div className="hidden md:flex dark:bg-[#6C6C6C] bg-white justify-center items-center fixed top-0 left-0 right-0 w-full z-20 h-[13vh]">
      <header className="flex justify-between items-center my-[-20px]">
        <div className="w-[120px] mr-[100px]">
          <a href="/">
            <img
              className="hidden dark:block w-full"
              src="/logo-dark.svg"
              alt="Jam-forte Home"
            />
          </a>
          <a href="/">
            <img
              className="block dark:hidden w-full"
              src="/logo-light.svg"
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
                  ? "text-[#ff9c00] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
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
                  ? "text-[#ff9c00] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
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
                  ? "text-[#ff9c00] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
              }`}
            >
              Services
            </a>
            {history.hash === "#services" && <Span />}
          </div>
          <div className="relative">
            <p
              onClick={() => {
                setIsActive("Team");
                navigate(`/team`);
              }}
              className={`${
                history.pathname === "/team"
                  ? "text-[#ff9c00] dark:text-[#000] px-[20px] text-sm cursor-pointer"
                  : "text-[#999999] font-[500] dark:text-white px-[20px] cursor-pointer relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
              }`}
            >
              Team
            </p>
            {history.pathname === "/team" && <Span />}
          </div>
          <a href="#contactUs">
            <Button
              type="button"
              className="dark:bg-[#fff] 
              dark:text-[#000] bg-black text-white p-[13px] 
              rounded-[10px] mr-[45px] text-sm dark:hover:text-[#fff] dark:hover:bg-[#000] 
              hover:text-[#ff9c00]"
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
