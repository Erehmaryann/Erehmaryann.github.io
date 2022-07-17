import React from "react";

import { CloseDark, CloseLight, OpenLight, OpenDark } from "./icons";

const SideBar = React.lazy(() => import("./side-bar"));
const ThemeSwitch = React.lazy(() => import("../theme-switch/ThemeSwitch"));

function MobileNav() {
  const [showNav, setShowNav] = React.useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className=" md:hidden sm:flex  dark:bg-[#6C6C6C] bg-white justify-center items-center sticky top-0 left-0 w-full z-20">
      <header className="relative flex items-center justify-between w-full">
        <div className=" w-[120px]">
          <a href="/">
            <img
              className="hidden dark:block w-full mr-[70px]"
              src="/logo-dark.png"
              alt="Jam-forte Home"
            />
          </a>
          <a href="/">
            <img
              className="block dark:hidden w-full mr-[70px]"
              src="/logo-light.png"
              alt="Jam-forte Home"
            />
          </a>
        </div>
        <div className="mr-6">
          <div className="block dark:hidden" onClick={handleNav}>
            {showNav ? <CloseLight /> : <OpenLight />}
          </div>
          <div className="hidden dark:block" onClick={handleNav}>
            {showNav ? <CloseDark /> : <OpenDark />}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ThemeSwitch />
        </div>
      </header>
      {showNav && <SideBar handleNav={handleNav} />}
    </div>
  );
}

export default MobileNav;
