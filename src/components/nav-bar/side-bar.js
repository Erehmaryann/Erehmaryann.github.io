import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Button = React.lazy(() => import("../common/button/button"));

const Span = () => (
  <span
    className="absolute w-[7px] h-[7px] bottom-[-12px] left-[50%] rounded-[50%] bg-[#f6d021] dark:bg-black"
    aria-hidden="true"
  ></span>
);

const SideBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [isActive, setIsActive] = React.useState("");
  const history = useLocation();
  let navigate = useNavigate();
  return (
    <nav className="flex-col items-center justify-center hidden">
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
        <p
          // to="/team"
          onClick={() => {
            setIsActive("Team");
            navigate(`/team`);
          }}
          className={`${
            history.pathname === "/team"
              ? "text-[#F6D021] dark:text-[#000] px-[20px] text-sm"
              : "text-[#999999] font-[500] dark:text-white px-[20px] relative text-sm dark:hover:text-[#000] hover:text-[#f6d021]"
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
              rounded-[10px] mr-[45px] text-sm shadow-[0px_5px_20px_#BDDFFF] dark:hover:text-[#fff] dark:hover:bg-[#000] 
              hover:text-[#f6d021]"
          aria-label="contact-us-button"
        >
          Contact us
        </Button>
      </a>
    </nav>
  );
};

export default SideBar;
