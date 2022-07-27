import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";

function Overview() {
  return (
    <motion.div
      className="md:w-[95%] md:pt-[80px] md:pb-[60px] dark:text-white sm:px-4 sm:py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="dark:text-[#fff] md:text-[2.6rem] sm:text-[2rem] font-[600] leading-10 whitespace-normal"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        Mobile App Development: Overview
      </motion.h2>
      <motion.p
        className="pt-[21px] md:text-[1rem] sm:text-[0.9rem]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        JAM-Forte's Mobile application designers have a piece serious areas of
        strength and experience in technologies utilized in building
        applications. They have insight into utilizing testing, conveying, and
        checking instruments for our applications.
        <br />
        In our application plan, we fundamentally plan each step and withdraw to
        look at what we are working to further develop promoting techniques and
        offer some benefit to the clients.
        <br />
        Our applications are intended to show ideal execution and further
        develop client fulfillment.
      </motion.p>
    </motion.div>
  );
}

export default Overview;
