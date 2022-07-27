import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { variants, itemsVariants } from "./nav-variants";
import { motion } from "framer-motion";

import { Span } from "./span";
import { CloseDark, CloseLight, OpenLight, OpenDark } from "./icons";

const Button = React.lazy(() => import("../common/button/button"));
const ThemeSwitch = React.lazy(() => import("../theme-switch/ThemeSwitch"));

function MobileNav() {
  const [showNav, setShowNav] = React.useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setIsActive] = React.useState<string>("company");
  const history = useLocation();
  let navigate = useNavigate();

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="md:hidden sm:flex dark:bg-[#6C6C6C] bg-white justify-center items-center fixed top-0 left-0 right-0 w-full z-20 h-[13vh]">
      <header className="relative flex items-center justify-between w-full">
        <div className="w-[120px] pl-4">
          <a href="/">
            <img
              className="hidden dark:block w-full mr-[70px]"
              src="/logo-dark.svg"
              alt="Jam-forte Home"
            />
          </a>
          <a href="/">
            <img
              className="block dark:hidden w-full mr-[70px]"
              src="/logo-light.svg"
              alt="Jam-forte Home"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <ThemeSwitch />
        </div>
        <div className="mr-6">
          <Button
            type="button"
            className="block dark:hidden"
            onClick={handleNav}
          >
            {showNav ? <CloseLight /> : <OpenLight />}
          </Button>
          <Button
            type="button"
            className="hidden dark:block"
            onClick={handleNav}
          >
            {showNav ? <CloseDark /> : <OpenDark />}
          </Button>
        </div>
      </header>
      {showNav && (
        <div>
          <motion.nav
            animate={showNav ? "open" : "closed"}
            variants={variants}
            className="justify-center p-8 top-[120px] right-[10px] bg-white absolute flex-col items-center border h-[277px] w-[70%] dark:bg-[#6C6C6C] rounded-[10px]"
          >
            <motion.div
              className="relative pb-4"
              onClick={handleNav}
              variants={itemsVariants}
            >
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
            </motion.div>
            <motion.div
              className="relative pb-4"
              onClick={handleNav}
              variants={itemsVariants}
            >
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
            </motion.div>
            <motion.div
              className="relative pb-4"
              onClick={handleNav}
              variants={itemsVariants}
            >
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
            </motion.div>
            <motion.div
              className="relative pb-4"
              onClick={handleNav}
              variants={itemsVariants}
            >
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
            </motion.div>
            <motion.a href="#contactUs" variants={itemsVariants}>
              <Button
                onClick={handleNav}
                type="button"
                className="dark:bg-[#fff]
              dark:text-[#000] bg-black text-white p-[13px] 
              rounded-[10px] text-sm dark:hover:text-[#fff] dark:hover:bg-[#000] 
              hover:text-[#ff9c00]"
                aria-label="contact-us-button"
              >
                Contact us
              </Button>
            </motion.a>
          </motion.nav>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
