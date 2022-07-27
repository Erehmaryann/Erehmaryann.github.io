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
      <div className="flex flex-wrap justify-between items-center md:w-[70%]">
        <motion.div
          className="md:w-[15%] sm:w-[30%] py-2"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          <a href="/">
            <img className="w-full" src="/logo-dark.svg" alt="Jam-forte Home" />
          </a>
        </motion.div>
        <motion.h3
          className="font-[700] text-white text-[1.7rem]  md:w-[35%]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          Get In Touch With Our Teams
        </motion.h3>

        <motion.p
          className="md:w-[35%] text-[0.7rem] font-[500] text-white py-2"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          We have a team of experienced professionals with great expertise in
          the IT Industry who are dedicated to turning your business Ideas into
          Reality.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default GetTouch;
