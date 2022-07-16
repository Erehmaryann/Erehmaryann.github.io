import React from "react";

const Partner = React.lazy(() => import("./partners"));
const WhyUs = React.lazy(() => import("./why-us"));

function About() {
  return (
    <section
      id="about"
      className="w-screen flex justify-center dark:bg-[#D3D3D3] bg-[#F3F3F3]"
    >
      <div className="w-full">
        <Partner />
        <WhyUs />
      </div>
    </section>
  );
}

export default About;
