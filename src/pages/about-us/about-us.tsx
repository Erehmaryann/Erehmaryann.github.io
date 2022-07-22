import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";

import team from "../../assets/svg/about-us.svg";

function AboutUs() {
  return (
    <section className="w-screen h-screen flex justify-center items-center dark:bg-[#D3D3D3] bg-[#F3F3F3]">
      <motion.div
        className="flex flex-col items-center justify-center w-full sm:p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-[#333535] text-[2rem] font-[700] leading-[26px] sm:text-justify w-[100%] md:text-center pt-[120px]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          About Us
        </motion.h1>
        <motion.div
          className="md:w-[75%] flex justify-between items-center sm:pb-14 md:pb-[100px] h-auto md:flex-row sm:flex-col sm:pt-[35px]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          <div className="md:w-[50%] sm:w-[100%] sm:pb-8 md:mt-10">
            <p className="text-[#6C6C6C] dark:text-[#000] font-[600] text-[0.8rem] pt-8 leading-5">
              JAM-Forte Technologies Ltd is a topnotch IT service provider with
              head operations in Abuja, Nigeria. We specialize in software-based
              solution. Our vision is to become a major IT service provider in
              Africa, delivering excellent service to all industry. Our Mission
              is to deliver top-notch service in web development, Mobile
              development, Software’s and Enterprise System development,
              Artificial Intelligence, Networking, and Hardware Manufacturing,
              all geared towards solving socio-economic challenges globally. We
              envision a society where business will operation with minimal or
              no operational challenges. JAM-Forte Technologies have been in the
              business of solving problems since June 2018 when we had just
              kicked off our first operation. Currently, we have clients cut
              across over 7 states in Nigeria and still counting. Aside building
              solutions for businesses, we have developed 3 products and still
              developing more products to help simplify living in Africa. Our
              team of developers are trained experts with several years of
              experience and learning. We are confidence that soon our solutions
              will be recognized and widely embrace by almost every business and
              individuals in Nigeria and Africa at large.
            </p>
          </div>
          <div className="md:w-[45%] sm:w-[100%] items-start sm:mt-12 md:h-auto sm:h-[60%]">
            <img
              src={team}
              alt="ladies"
              className="w-full md:h-auto sm:h-full sm:my-[-10px] md:m-0 sm:mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUs;
