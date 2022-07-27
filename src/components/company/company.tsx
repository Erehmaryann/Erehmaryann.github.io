import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../services/variants";
import { useNavigate } from "react-router-dom";

import people from "../../assets/svg/people.svg";
import v from "../../assets/v.png";
import lightV from "../../assets/light-v.png";
import ladies from "../../assets/svg/ladies.svg";
import Button from "../common/button/button";

function Company() {
  let navigate = useNavigate();

  return (
    <section
      id="company"
      className="w-screen flex justify-center items-center dark:bg-[#6C6C6C] bg-[#FBFBFA] md:py-[100px] sm:pt-14"
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full h-full sm:p-4 md:px-0 md:pb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="sm:pt-8 md:text-center sm:w-[100%] md:w-[55%]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-[#333535] dark:text-white text-[1.8rem] font-[700] leading-[26px] sm:text-justify w-[100%] md:text-center">
            Customer trust is our goal
          </h1>
        </motion.div>
        <motion.div
          className="flex h-[60%] justify-between items-center sm:flex-col-reverse md:flex-row md:w-[55%] md:mt-[10px] sm:mt-[35px]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          <div className="md:w-[50%] sm:w-[100%] items-start sm:mt-[16px] md:h-auto sm:h-[70%]">
            <img
              src={people}
              alt="people"
              className="w-full md:h-auto sm:h-full mx-[-35px]"
            />
          </div>
          <div className="relative flex justify-center flex-col h-[30%] md:w-[45%] sm:w-[100%] sm:pb-8 md:py-4">
            <img
              className="absolute z-0 h-full dark:hidden"
              src={lightV}
              alt="vision bg"
            />
            <img
              className="absolute z-0 hidden h-full dark:block"
              src={v}
              alt="vision bg"
            />
            <h4 className="z-10 dark:text-[#ff9c00] text-[0.9rem] font-[700] my-[-8px]">
              Our Vision
            </h4>
            <p className="z-10 text-[0.7rem] font-[500] text-[#909090] dark:text-[#fff]  pt-[8px]">
              To become a major IT service provider in Africa, delivering
              excellent service to all industry
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-[55%] flex justify-between items-center sm:pb-14 md:pb-[100px] h-auto md:flex-row sm:flex-col sm:pt-[35px]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          <div className="flex justify-center items-start flex-col h-[40%] md:w-[45%] sm:w-[100%] sm:pb-8 md:mt-10">
            <h3 className="text-[1.8rem] font-[700] text-[#333535] dark:text-[#fff]">
              Our Mission
            </h3>
            <p className="text-[#6C6C6C] dark:text-white font-[500] text-[0.7rem] pt-2 leading-5">
              Delivering top-notch service in web development, Mobile
              development, Software’s and Enterprise System development,
              Artificial Intelligence, Networking, and Hardware Manufacturing,
              all geared towards solving socio-economic challenges globally.
            </p>
            <p
              onClick={() => {
                navigate(`/about-us`);
              }}
            >
              <Button
                type="button"
                className="bg-[#ff9c00] drop-shadow-md   
                rounded-[10px] py-[14px] px-[30px] mt-[20px] text-white text-[0.8rem]"
              >
                Learn About
              </Button>
            </p>
          </div>
          <div className="md:w-[50%] sm:w-[100%] items-start sm:mt-12 md:h-auto sm:h-[60%]">
            <img
              src={ladies}
              alt="ladies"
              className="w-full md:h-auto sm:h-full sm:my-[-10px] md:m-0 sm:mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Company;
