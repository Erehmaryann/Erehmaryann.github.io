import React from "react";

const SideBar = React.lazy(() => import("./side-bar"));
const ThemeSwitch = React.lazy(() => import("../theme-switch/ThemeSwitch"));

function MobileNav() {
  return (
    <div className="md:hidden sm:flex  dark:bg-[#6C6C6C] bg-white justify-center items-center sticky top-0 left-0 w-full z-20">
      <header
        id="mobileNav"
        className="flex items-center justify-between my-[-20px]"
      >
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
        <SideBar />
        <div className="flex items-center justify-center">
          <ThemeSwitch />
        </div>
      </header>
    </div>
  );
}

export default MobileNav;
