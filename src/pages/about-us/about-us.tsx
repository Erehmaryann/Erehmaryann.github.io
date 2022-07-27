import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";

import team from "../../assets/svg/about-us.svg";
import aboutBg from "../../assets/about-bg.jpg";

function AboutUs() {
  return (
    <motion.section
      className="w-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      // style={{ paddingTop: "150px" }}
    >
      <motion.section
        id="hero"
        className="relative h-[70vh] w-full flex justify-center items-center"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="absolute left-0 right-0 w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={aboutBg}
            alt="hero bg-img"
          />
        </div>
        <div className="bg-[rgba(0,0,0,0.6)] w-full h-full z-10 absolute flex justify-center items-center">
          <div className="z-10 absolute flex h-full flex-col items-center lg:text-center justify-center sm:text-left md:w-[55%] sm:w-[100%] sm:px-4">
            <h2 className="text-[#fff] lg:w-[45%] sm:w-full text-[2.6rem] font-bold leading-10">
              About Us
            </h2>
            <p className="text-[#fff] lg:w-[85%] sm:w-full pt-[21px] pb-[33px] text-[1rem] my-3">
              We believe in open communication and transparency; you will always
              know what is happening with your project and what to expect. So,
              why choose us? Because we are the best IT company out there, and
              we want to help you grow your business.
            </p>
          </div>
        </div>
      </motion.section>
      <div className="w-screen h-auto flex justify-center items-center dark:bg-[#D3D3D3] bg-[#F3F3F3]">
        <motion.div
          className="flex flex-col items-center justify-center w-full sm:p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-[75%] flex justify-between items-center flex-wrap sm:pb-14 md:pb-[80px] md:pt-0 h-auto sm:pt-[35px]"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            <div className="lg:w-[50%] sm:w-[100%] sm:pb-8 md:mt-10">
              <p className="text-[#6C6C6C] dark:text-[#000] font-[600] text-[0.8rem] md:pt-8 leading-5">
                JAM-Forte Technologies Ltd is a topnotch IT service provider
                with head operations in Abuja, Nigeria. We specialize in
                software-based solution. Our vision is to become a major IT
                service provider in Africa, delivering excellent service to all
                industry. Our Mission is to deliver top-notch service in web
                development, Mobile development, Software’s and Enterprise
                System development, Artificial Intelligence, Networking, and
                Hardware Manufacturing, all geared towards solving
                socio-economic challenges globally. We envision a society where
                business will operation with minimal or no operational
                challenges. JAM-Forte Technologies have been in the business of
                solving problems since June 2018 when we had just kicked off our
                first operation. Currently, we have clients cut across over 7
                states in Nigeria and still counting. Aside building solutions
                for businesses, we have developed 3 products and still
                developing more products to help simplify living in Africa. Our
                team of developers are trained experts with several years of
                experience and learning. We are confidence that soon our
                solutions will be recognized and widely embrace by almost every
                business and individuals in Nigeria and Africa at large.
              </p>
            </div>
            <div className="lg:w-[45%] sm:w-[100%] items-start sm:mt-12 md:h-auto sm:h-[60%]">
              <img
                src={team}
                alt="team-members"
                className="w-full md:h-auto sm:h-full sm:my-[-10px] md:m-0 sm:mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
