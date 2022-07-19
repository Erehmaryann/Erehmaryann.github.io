import React from "react";
import { motion } from "framer-motion";
const Hero = React.lazy(() => import("../../components/hero/hero"));
const Company = React.lazy(() => import("../../components/company/company"));
const About = React.lazy(() => import("../../components/about/about"));
const Services = React.lazy(() => import("../../components/services/services"));

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exist"
    >
      <Hero />
      <Company />
      <About />
      <Services />
    </motion.div>
  );
}

export default Home;
