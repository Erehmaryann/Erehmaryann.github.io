import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";
import softwareBg from "../../assets/svg/cus-soft-dev-bg.svg";
import softwareBanner from "../../assets/svg/cus-soft-dev-banner.svg";

const Benefits = React.lazy(() => import("./benefits"));
const Overview = React.lazy(() => import("./overview"));
const Categories = React.lazy(() => import("./categories"));

function ArtificialIntel() {
  return (
    <motion.div
      className="w-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <section
        id="hero"
        className="relative h-[100vh] w-full flex justify-center items-center"
      >
        <motion.div
          className="absolute left-0 right-0 w-full h-full top-0 bottom-0"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          <img
            className="object-cover w-full h-full"
            src={softwareBg}
            alt="enterprise bg-img"
          />
        </motion.div>
        <div className="bg-[rgba(0,0,0,0.6)] w-full h-full z-10 absolute flex md:justify-end sm:justify-center items-center md:pr-[130px]">
          <div className="z-10 absolute flex h-full md:text-right flex-col md:items-end md:justify-end sm:justify-center sm:items-start md:w-[50%] sm:w-full sm:px-4">
            <motion.h2
              className="text-[#fff] md:text-[2.6rem] sm:text-[2rem] font-[600] leading-10 whitespace-normal"
              variants={fadeInDown}
              initial="initial"
              animate="animate"
            >
              Custom Software Development
            </motion.h2>
            <motion.p
              className="text-[#fff] pt-[21px] md:text-[1rem] sm:text-[0.9rem] md:pb-[100px] sm:pb-[0px]"
              variants={fadeInDown}
              initial="initial"
              animate="animate"
            >
              Expect unrivaled software development experience and proactive
              bits of knowledge. Because of many arrangements in different
              ventures added to our repertoire, our in-house engineers figure
              out your difficulties and convey pertinent arrangements in view of
              down to earth insight.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="absolute z-10 md:w-[10%] sm:w-[20%] lg:bottom-[-10%] md:bottom-[-5%] sm:bottom-[-5%] lg:left-14 sm:left-4"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          <img
            src={softwareBanner}
            alt="enterprise-banner"
            className="w-full"
          />
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center dark:bg-[#6C6C6C] w-full">
        <Overview />
        <Benefits />
        <Categories />
      </section>
    </motion.div>
  );
}

export default ArtificialIntel;
