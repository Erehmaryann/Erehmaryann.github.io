import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../company/variants";

import update from "../../assets/update.svg";
import trust from "../../assets/trust.svg";
import award from "../../assets/award.svg";
import hours from "../../assets/hours.svg";

function WhyUs() {
  return (
    <motion.section
      className="flex flex-col items-center w-full sm:p-4 md:py-[100px]"
      variants={containerVariants}
      initial="hidden"
      exit="exit"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="sm:pt-[21px] md:pt-0 pb-[35px] md:text-center md:w-[300px]">
        <h3 className="font-[700] text-[#333535] pb-[8px] text-[1.8rem]">
          Why Choose Us
        </h3>
        <p className="text-[#6C6C6C] font-[500] text-[0.7rem]">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution.
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center md:w-[55%] md:pb-[40px]">
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
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
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
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
              Be rest assured that your confidential credentials supplied to us
              are safe and will not be used without your notice.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center md:w-[55%]">
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
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
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
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
              We put all security consideration in check while building projects
              for our client.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyUs;
