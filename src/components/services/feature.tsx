import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "./variants";

import { featureData } from "./feature-data";

function Feature() {
  return (
    <motion.section
      className="flex flex-col items-center w-full md:py-[100px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="sm:pt-[32px] sm:w-[100%] md:w-[55%] md:pt-0 pb-[35px] md:text-center flex flex-col items-center justify-center"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <h3 className="font-[700] sm:text-justify w-[100%] md:text-center text-[#333535] dark:text-white pb-[8px] text-[1.8rem]">
          What We Offer
        </h3>
        <p className="text-[rgba(0, 0, 0, 0.86)] dark:text-white pt-2 font-[400] text-[0.7rem] md:w-[400px] sm:text-justify w-[100%] md:text-center">
          We provide state-of-the-art IT solutions and services delivered with
          the right technological tools tailored for your business needs.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between items-center md:w-[65%] sm:w-full lg:w-[65%] xl:w-[65%] md:pt-[40px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-wrap justify-between w-full">
          {featureData.map((data) => (
            <div
              key={data.id}
              className="flex justify-between flex-col items-center md:mx-8 sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[25%] bg-[#ffffff] rounded py-4 px-8 mb-6"
            >
              <img
                className="mx-auto"
                src={data.src}
                alt={`${data.text}`}
                width={80}
              />
              <h6 className="text-[#000] font-[700] text-[0.7rem] text-center whitespace-pre-line">
                {data.text}
              </h6>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Feature;
