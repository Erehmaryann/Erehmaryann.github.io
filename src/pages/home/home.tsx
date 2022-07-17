import React from "react";
const Hero = React.lazy(() => import("../../components/hero/hero"));
const Company = React.lazy(() => import("../../components/company/company"));
const About = React.lazy(() => import("../../components/about/about"));
const Services = React.lazy(() => import("../../components/services/services"));

function Home() {
  return (
    <div>
      <Hero />
      <Company />
      <About />
      <Services />e
    </div>
  );
}

export default Home;
