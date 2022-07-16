import React from "react";

const GetTouch = React.lazy(() => import("./get-in-touch"));

function Footer() {
  return (
    <section
      id="contactUs"
      className="w-screen flex justify-center dark:bg-[#D3D3D3] bg-[#F3F3F3]"
    >
      <div className="w-full">
        <GetTouch />
      </div>
    </section>
  );
}

export default Footer;
