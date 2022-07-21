import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../services/variants";

import update from "../../assets/svg/update.svg";
import trust from "../../assets/svg/trust.svg";
import award from "../../assets/svg/award.svg";
import hours from "../../assets/svg/hours.svg";

function WhyUs() {
  return (
    <motion.section
      className="flex flex-col items-center w-full sm:p-4 md:py-[100px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="sm:pt-[21px] md:pt-0 pb-[35px] md:text-center md:w-[400px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <h3 className="font-[700] text-[#333535] pb-[8px] text-[1.8rem]">
          Why Choose Us
        </h3>
        <p className="text-[#6C6C6C] font-[500] text-[0.7rem]">
          Our team is dedicated to providing top-quality service to our clients.
          We also care about our clients and their businesses; we want them to
          succeed.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-between items-center md:w-[55%] md:pb-[40px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center sm:pb-3 md:pb-0">
          <img
            src={update}
            alt="lifetime update"
            className="sm:ml-[-12px] md:ml-0"
            width={84}
          />
          <div className="flex flex-col md:w-[280px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              Lifetime Support
            </h6>
            <p className=" text-[#909090] text-[0.8rem] font-[400] dark:text-[#000]">
              We offer lifetime support for all project deployed.
            </p>
          </div>
        </div>
        <div className="flex items-center sm:pb-3 md:pb-0">
          <img
            src={trust}
            alt="trust worthy icon"
            className="sm:ml-[-12px] md:ml-0"
            width={84}
          />
          <div className="flex flex-col md:w-[280px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              Trustworthy
            </h6>
            <p className=" text-[#909090] text-[0.8rem] font-[400] dark:text-[#000]">
              Be rest assured that your confidential credentials supplied to us
              are safe and will not be used without your notice.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-between items-center md:w-[55%]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center sm:pb-3 md:pb-0">
          <img
            src={award}
            alt="award winning icon"
            className="sm:ml-[-12px] md:ml-0"
            width={84}
          />
          <div className="flex flex-col md:w-[280px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              Innovation beyond initial idea
            </h6>
            <p className=" text-[#909090] text-[0.8rem] font-[400] dark:text-[#000]">
              We develop ideas brought to us by clients to ensure they achieve a
              possible maximum result.
            </p>
          </div>
        </div>
        <div className="flex items-center sm:pb-3 md:pb-0">
          <img
            src={hours}
            alt="support icon"
            className="sm:ml-[-12px] md:ml-0"
            width={84}
          />
          <div className="flex flex-col md:w-[280px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              Encrypted Development
            </h6>
            <p className=" text-[#909090] text-[0.8rem] font-[400] dark:text-[#000]">
              We put all security consideration in check while building projects
              for our client.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default WhyUs;
