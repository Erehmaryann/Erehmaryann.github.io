import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../services/variants";

function GetTouch() {
  return (
    <motion.section
      className="flex justify-center items-center bg-[#ff9c00] sm:p-4 md:py-[35px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap justify-between items-center md:w-[45%]">
        <motion.h3
          className="font-[700] text-white text-[1.7rem]  md:w-[40%]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          Get In Touch With Our Teams
        </motion.h3>

        <motion.p
          className="md:w-[40%] text-[0.7rem] font-[500] py-2"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default GetTouch;
