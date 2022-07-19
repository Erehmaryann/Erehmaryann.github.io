import React from "react";
import { motion } from "framer-motion";
import teamBg from "../../assets/team-bg.png";

const Executive = React.lazy(() => import("./executive"));
const TeamMembers = React.lazy(() => import("./team-members"));

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Team() {
  return (
    <motion.div
      className="w-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section
        id="hero"
        className="relative h-[70vh] w-full flex justify-center items-center"
      >
        <div className="absolute left-0 right-0 w-full h-full">
          <img className="object-cover h-full" src={teamBg} alt="hero bg-img" />
        </div>
        <div className="z-10 absolute flex h-full flex-col items-center text-center md:w-[55%] sm:px-4 pt-[60px]">
          <h2 className="text-[#fff] md:w-[45%] text-[2.6rem] font-bold leading-10 pl-1">
            Our Team
          </h2>
          <p className="text-[#fff] md:w-[85%] pt-[21px] pb-[33px] text-[1rem] pl-1 my-3 bg-[rgba(0,0,0,0.5)]">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center dark:bg-[#6C6C6C] w-full">
        <Executive />
        <TeamMembers />
      </section>
    </motion.div>
  );
}

export default Team;
