import React from "react";

import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";
import teamBg from "../../assets/team.jpg";

const Executive = React.lazy(() => import("./executive"));
const TeamMembers = React.lazy(() => import("./team-members"));

function Team() {
  return (
    <motion.div
      className="w-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.section
        id="hero"
        className="relative h-[80vh] w-full flex justify-center items-center"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="absolute left-0 right-0 w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={teamBg}
            alt="hero bg-img"
          />
        </div>
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-full z-10 absolute flex justify-center items-center">
          <div className="z-10 absolute flex h-full flex-col items-center lg:text-center justify-center sm:text-left md:w-[55%] sm:w-[100%] sm:px-4">
            <h2 className="text-[#fff] lg:w-[45%] sm:w-full text-[2.6rem] font-bold leading-10">
              Meet Our Team
            </h2>
            <p className="text-[#fff] lg:w-[85%] sm:w-full pt-[21px] pb-[33px] text-[1rem] my-3">
              To be the company our customers want us to be, it takes an
              eclectic group of passionate operators. Get to know the people
              leading the way and the world class problem solvers at JAM-forte.
            </p>
          </div>
        </div>
      </motion.section>
      <section className="flex flex-col items-center justify-center dark:bg-[#6C6C6C] w-full">
        <Executive />
        <TeamMembers />
      </section>
    </motion.div>
  );
}

export default Team;
