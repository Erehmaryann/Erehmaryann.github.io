import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Button = React.lazy(() => import("../common/button/button"));

const Span = () => (
  <span
    className="absolute w-[7px] h-[7px] right-[50%] top-[25%] rounded-[50%] bg-[#ff9c00] dark:bg-black"
    aria-hidden="true"
  ></span>
);

type NavProps = {
  handleNav: () => void;
};

const SideBar = ({ handleNav }: NavProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setIsActive] = React.useState("");
  const history = useLocation();
  let navigate = useNavigate();

  return (
    <motion.nav
      style={{ right: 0 }}
      animate={{ left: 100 }}
      className="justify-center p-8 top-[90px] right-[10px] bg-white absolute flex-col items-center border h-[350px] w-[70%] dark:bg-[#6C6C6C] rounded-[10px]"
    >
      <div className="relative pb-4" onClick={handleNav}>
        <a
          href="/#company"
          onClick={() =>
            history.pathname === "/"
              ? setIsActive("Company")
              : setIsActive("Company")
          }
          className={`${
            history.hash === "#company"
              ? "text-[#ff9c00] dark:text-[#000] text-sm"
              : " text-[#999999] font-[500] dark:text-white relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
          }`}
        >
          Company
        </a>
        {history.hash === "#company" && <Span />}
      </div>
      <div className="relative pb-4" onClick={handleNav}>
        <a
          href="/#about"
          onClick={() => setIsActive("About")}
          className={`${
            history.hash === "#about"
              ? "text-[#ff9c00] dark:text-[#000] text-sm"
              : "text-[#999999] font-[500] dark:text-white relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
          }`}
        >
          About
        </a>
        {history.hash === "#about" && <Span />}
      </div>
      <div className="relative pb-4" onClick={handleNav}>
        <a
          href="/#services"
          onClick={() => setIsActive("Services")}
          className={`${
            history.hash === "#services"
              ? "text-[#ff9c00] dark:text-[#000] text-sm"
              : " text-[#999999] font-[500] dark:text-white relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
          }`}
        >
          Services
        </a>
        {history.hash === "#services" && <Span />}
      </div>
      <div className="relative pb-4" onClick={handleNav}>
        <p
          onClick={() => {
            setIsActive("Team");
            navigate(`/team`);
          }}
          className={`${
            history.pathname === "/team"
              ? "text-[#ff9c00] dark:text-[#000] text-sm cursor-pointer"
              : "text-[#999999] font-[500] dark:text-white cursor-pointer relative text-sm dark:hover:text-[#000] hover:text-[#ff9c00]"
          }`}
        >
          Team
        </p>
        {history.pathname === "/team" && <Span />}
      </div>
      <a href="#contactUs">
        <Button
          onClick={handleNav}
          type="button"
          className="dark:bg-[#fff]
              dark:text-[#000] bg-black text-white p-[13px] 
              rounded-[10px] text-sm shadow-[0px_5px_20px_#BDDFFF] dark:hover:text-[#fff] dark:hover:bg-[#000] 
              hover:text-[#ff9c00]"
          aria-label="contact-us-button"
        >
          Contact us
        </Button>
      </a>
    </motion.nav>
  );
};

export default SideBar;
