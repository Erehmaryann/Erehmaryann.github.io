import React from "react";
import { partnerData } from "./partner-data";
import { motion } from "framer-motion";
import { fadeInDown } from "../services/variants";

function Partners() {
  return (
    <motion.section
      className="flex flex-col items-center w-full bg-black sm:p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="py-[21px] md:text-center md:w-[300px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <h3 className="font-[700] text-white py-[8px] text-[1.8rem]">
          OUR HAPPY CLIENTS
        </h3>
        <p className="text-[#ff9c00] font-[500] text-[0.7rem]">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap items-center justify-between pb-4"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        {partnerData.map((data) => (
          <div className="md:mx-8" key={data.id}>
            <img src={data.src} alt="partner-logo" className="sm:mb-4" />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Partners;
