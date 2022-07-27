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
        <div className="flex justify-between dark:text-white text-[0.9rem] lg:w-[75%] md:w-[77%] items-center md:flex-row sm:flex-wrap py-12 sm:px-6">
          <motion.div
            className="lg:w-[40%] md:w-[45%]"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            <p className="font-[600] text-[1rem] pb-4">
              To JAM-Forte's Partners
            </p>
            <ul className="list-none style-list">
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                All round accessibility.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                It is convenient, credible, and cost effective.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Cross-platform capabilities.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Easy Expandability.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Improved Business Reputation.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="md:pt-0 sm:pt-6 lg:w-[40%] md:w-[45%]"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            <p className="font-[600] text-[1rem] pb-4">To Our Clients</p>
            <ul className="list-none style-list">
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Strong online visibility.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Improved communication and transparency.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Improved customer support.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Fast, easy, and smart maintenance.
              </li>
              <li className="whitespace-normal text-[0.8rem] font-[500]">
                Real-Time Tracking of Businesses.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Benefits;
