import React from "react";

// const SideBar = React.lazy(() => import("./side-bar"));

function MobileNav() {
  return (
    <div className="md:hidden sm:flex  dark:bg-[#6C6C6C] bg-white justify-center items-center sticky top-0 left-0 w-full z-20">
      <header id="mobileNav" className="flex items-center justify-between">
        {/* <SideBar /> */}
      </header>
    </div>
  );
}

export default MobileNav;
