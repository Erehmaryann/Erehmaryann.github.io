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
        Artificial Intelligence: Overview
      </motion.h2>
      <motion.p
        className="pt-[21px] md:text-[1rem] sm:text-[0.9rem]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        AI and computerized reasoning advancements have as of late acquired high
        notoriety, be that as it may, most organizations actually fail to really
        see how to successfully utilize them. ML is perhaps the most promising
        innovation, which offers colossal opportunities for forward-looking
        organizations that endeavor to take their information utilization to the
        next tech level. Experts from our organization will assist you and your
        business with investigating new honors and learning more about open
        doors. Grow your web and social presence, obtain the best outcomes, and
        experience all the advantages with our group.
      </motion.p>
    </motion.div>
  );
}

export default Overview;
