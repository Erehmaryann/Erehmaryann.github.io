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
        className="sm:pt-[32px] md:w-[55%] md:pt-0 pb-[35px] md:text-center"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <h3 className="font-[500] text-[#000] dark:text-white pb-[8px] text-[1.8rem]">
          What We Offer
        </h3>
        <p className="text-[rgba(0, 0, 0, 0.86)] dark:text-white pt-2 font-[400] text-[0.7rem]">
          Providing easy viewing to the real-time status of your account, the
          Dashboard allows users to customize views, manage multiple account
          from one control panel.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between items-center md:w-[55%] sm:w-full md:pt-[40px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-wrap justify-between md:w-auto sm:w-full">
          {featureData.map((data) => (
            <div key={data.id} className="flex flex-col pb-10 md:mx-8">
              <img
                className="mx-auto dark:hidden"
                src={data.src2}
                width={30}
                alt={`${data.text}`}
              />
              <img
                className="hidden mx-auto dark:block"
                src={data.src}
                width={30}
                alt={`${data.text}`}
              />
              <h6 className="dark:text-[#ff9c00] text-[#23232B] font-[700] text-[0.7rem] pt-2">
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
