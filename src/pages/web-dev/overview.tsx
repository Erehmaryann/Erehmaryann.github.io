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
        We don't disregard Browser similarity, in any event, for the sites of
        some of the most trustworthy organizations. Disregarding Browser
        Compatibility can cause adverse consequences to on-site ease of use.{" "}
        <br />
        Since Forms are a vital component on business sites and they permit
        clients to collaborate with the site. We incorporate structures into
        Clients' site for a business, whenever mentioned.
        <br />
        We Plan your site areas and classifications cautiously and present data
        in a manner that is simple for clients to find.
        <br />
        The load time of a site or Webapp matters, thusly we oversee and upgrade
        portions of the site that would decrease its load speed.
      </motion.p>
    </motion.div>
  );
}

export default Overview;
