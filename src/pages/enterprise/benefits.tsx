import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";

function Benefits() {
  return (
    <motion.div
      className="bg-[#F3F3F3] dark:bg-[#A4A4A4] w-full md:pt-14 sm:pt-10 md:pb-[30px] flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center items-center md:w-[60%] sm:px-4">
        <motion.h2
          className="dark:text-[#fff] md:text-[2.6rem] sm:text-[2rem] font-[600] leading-10 whitespace-normal md:text-center"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          Benefits when you hire us for this service
        </motion.h2>
        <div className="flex justify-between dark:text-white text-[0.9rem] md:w-[77%] items-center sm:flex-wrap py-12 sm:px-6">
          <div className="flex justify-between flex-wrap">
            <motion.div
              className="lg:w-[40%] md:w-[45%] sm:w-[100%]"
              variants={fadeInDown}
              initial="initial"
              animate="animate"
            >
              <p className="font-[600] text-[1rem] pb-4">
                To JAM-Forte's Partners
              </p>
              <ul className="list-none style-list">
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Further developed security.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Gives admittance to data from an incorporated area.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Further developed proficiency.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Expanded adaptability and versatility.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Offers the upper hand.
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="md:pt-0 sm:pt-6 lg:w-[40%] md:w-[45%] sm:w-[100%]"
              variants={fadeInDown}
              initial="initial"
              animate="animate"
            >
              <p className="font-[600] text-[1rem] pb-4">To Our Clients</p>
              <ul className="list-none style-list">
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Higher labor force productivity.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Further developed cooperation and work process.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Start to finish quality and conveyance possession.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Support for administration system — criticism and survey.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Generally speaking item guide, needs and system, SDLC.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Benefits;
