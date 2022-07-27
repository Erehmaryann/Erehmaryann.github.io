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
              className="lg:w-[40%] md:w-[45%] sm:pb-6 sm:w-[100%]"
              variants={fadeInDown}
              initial="initial"
              animate="animate"
            >
              <p className="font-[600] text-[1rem] pb-4">
                To JAM-Forte's Partners
              </p>
              <ul className="list-none style-list">
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Ease in project management.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Improves efficiency and accountability.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Provides real time access to projects.
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="md:pt-0 lg:w-[40%] md:w-[45%] sm:w-[100%]"
              variants={fadeInDown}
              initial="initial"
              animate="animate"
            >
              <p className="font-[600] text-[1rem] pb-4">To Our Clients</p>
              <ul className="list-none style-list">
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Customer engagement for feedback.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Improved visibility and generation of revenue.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Memorability and better network with clients.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Improves customers loyalty.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  High versatility that yields an upper hand.
                </li>
                <li className="whitespace-normal text-[0.8rem] font-[500]">
                  Promotion of sales.
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
