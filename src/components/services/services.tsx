import React from "react";
import services from "../../assets/svg/services.svg";
import { fadeInDown } from "./variants";
import { motion } from "framer-motion";

const Button = React.lazy(() => import("../common/button/button"));
const Feature = React.lazy(() => import("./feature"));
const Review = React.lazy(() => import("./review"));

function Services() {
  return (
    <section
      id="services"
      className="w-screen flex justify-center items-center dark:bg-[#6C6C6C] bg-[#FBFBFA] md:py-[100px]"
    >
      <div className="flex flex-col items-center justify-center w-full h-full sm:p-4 md:px-0 md:pb-0">
        <motion.div
          className="flex justify-center items-center sm:flex-col-reverse md:flex-row md:w-[55%] md:mt-[0px] sm:mt-[35px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-[50%] sm:w-[100%] items-start sm:mt-[16px] md:h-auto sm:h-[70%]"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            <img
              src={services}
              alt="services"
              className="w-full md:h-auto sm:h-full md:mx-[-32px]"
            />
          </motion.div>
          <motion.div
            className="flex justify-center flex-col h-[40%] md:w-[45%] sm:w-[100%] sm:pb-8 md:mt-10 md:pl-[2.5rem]"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-[1.8rem] font-[700] text-[#333535] dark:text-[#fff]">
              Our Services
            </h3>
            <p className="text-[#6C6C6C] dark:text-white font-[500] text-[0.7rem] pt-2 leading-5">
              Our team of experts is dedicated to providing you with the best
              possible service. We understand that every client is different, so
              we take the time to listen to your concerns and create a plan that
              meets your specific needs.
            </p>
            {/* <a href="/">
              <Button
                type="button"
                className="bg-[#ff9c00] drop-shadow-md   
                rounded-[10px] py-[14px] px-[30px] mt-[20px] text-white text-[0.8rem]"
              >
                View more
              </Button>
            </a> */}
          </motion.div>
        </motion.div>
        <Feature />
        <Review />
      </div>
    </section>
  );
}

export default Services;
