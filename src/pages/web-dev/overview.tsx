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
        Web Development: Overview
      </motion.h2>
      <motion.p
        className="pt-[21px] md:text-[1rem] sm:text-[0.9rem]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        We don't overlook Browser compatibility, even for the websites of some
        of the most reputable companies. Neglecting Browser Compatibility can
        cause negative effects on website usability. <br />
        Because Forms are a very important element on business websites and they
        allow users to interact with the site. We build forms into Clients
        website for a business, if requested for.
        <br />
        We Plan your website sections and categories carefully and present
        information in a way that it is easy for users to find.
        <br />
        The load time of a website or Webapp matters, therefore we manage and
        optimise parts of the website that would reduce it's load speed.
      </motion.p>
    </motion.div>
  );
}

export default Overview;
