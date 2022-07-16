import React, { lazy } from "react";

const Span = () => (
  <span
    className="absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021] dark:bg-black"
    aria-hidden="true"
  ></span>
);

const ThemeSwitch = lazy(() => import("../theme-switch/ThemeSwitch"));
const Button = lazy(() => import("../common/button/button"));

function MainNav() {
  const [isActive, setIsActive] = React.useState("");

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
        <nav className="flex justify-center items-center">
          <div className="relative">
            <a
              href="#company"
              onClick={() => setIsActive("Company")}
              className={`${
                isActive === "Company"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              Company
            </a>
            {isActive === "Company" && <Span />}
          </div>
          <div className="relative">
            <a
              href="#about"
              onClick={() => setIsActive("About")}
              className={`${
                isActive === "About"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              About
            </a>
            {isActive === "About" && <Span />}
          </div>
          <div className="relative">
            <a
              href="#services"
              onClick={() => setIsActive("Services")}
              className={`${
                isActive === "Services"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              Services
            </a>
            {isActive === "Services" && <Span />}
          </div>
          <div className="relative">
            <a
              href="/team"
              onClick={() => setIsActive("Team")}
              className={`${
                isActive === "Team"
                  ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
                  : " text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
              }`}
            >
              Team
            </a>
            {isActive === "Team" && <Span />}
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
