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
        Enterprise System: Overview
      </motion.h2>
      <motion.p
        className="pt-[21px] md:text-[1rem] sm:text-[0.9rem]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        Dependable Development Tools - Enterprise applications request a few
        reconciliations, which must be done while the creating group is
        outfitted with fundamental devices. <br />
        Advancement-driven environment - Having the right arrangement of devices
        becomes crucial for any advancement project so that fulfilling time
        constraints doesn't turn into an entrusting interaction.
        <br />
        Having an environment that focuses on advancement can help engineers
        influence different outsider mixes to move along effectiveness.
        <br />
        For this reason, versatility becomes crucial when a venture is in a
        developing stage so there is adequate space accessible for future
        extension measures.
      </motion.p>
    </motion.div>
  );
}

export default Overview;
