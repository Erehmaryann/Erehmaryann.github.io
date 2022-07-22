import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";
import executiveMember from "../../assets/executive.png";

function TeamMembers() {
  return (
    <motion.div
      className="sm:p-4 md:w-[68%] sm:w-[100%] mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-[#000] dark:text-[#fff] font-[700] text-[1.5rem] text-center pb-[35px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        Team Members
      </motion.h2>
      <motion.div
        className="flex flex-col w-full"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="flex w-[100%]">
          <div className="border-l-[6px] border-[#000] w-[2%] dark:border-[#fff]"></div>
          <div className="w-[2%]"></div>
          <div
            className="flex w-[96%] md:justify-around sm:justify-between
        bg-[#F8F8F8] dark:bg-[#999999] text-[#000] dark:text-white rounded-[10px] p-2"
          >
            <h6 className="font-[700] text-[0.9em]">MARYANN EREH</h6>
            <h6 className="font-[700] text-[0.9em]">
              Alpha Frontend Developer.
            </h6>
          </div>
        </div>
        <div className="flex md:justify-around sm:justify-between flex-wrap py-7 text-[#000] dark:text-white w-full">
          <div className="md:w-[10%] sm:w-full">
            <img
              src={executiveMember}
              alt="team members"
              className="md:w-[300px] sm:w-[80%] sm:mx-auto md:mx-0"
            />
          </div>
          <p className="text-[0.7rem] md:w-[40%] sm:pt-4 md:pt-0">
            Maryann is a frontend developer who is very passionate about
            bringing ideas to reality through Codes. She has a background in
            computer science. She is a great team player and is considered an
            integral asset to the company.
            <br />
            <br />
            In her free time, she likes to read, watch movies, take pictures,
            eat, and sightseeing.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col w-full"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="flex w-[100%]">
          <div className="border-l-[6px] border-[#000] w-[2%] dark:border-[#fff]"></div>
          <div className="w-[2%]"></div>
          <div
            className="flex w-[96%] md:justify-around sm:justify-between
        bg-[#F8F8F8] dark:bg-[#999999] text-[#000] dark:text-white rounded-[10px] p-2"
          >
            <h6 className="font-[700] text-[0.9em]">EDWIN OSAYANDE</h6>
            <h6 className="font-[700] text-[0.9em]">
              Alpha Junior Frontend Developer.
            </h6>
          </div>
        </div>
        <div className="flex md:justify-around sm:justify-between flex-wrap py-7 text-[#000] dark:text-white w-full">
          <div className="md:w-[10%] sm:w-full">
            <img
              src={executiveMember}
              alt="team members"
              className="md:w-[300px] sm:w-[80%] sm:mx-auto md:mx-0"
            />
          </div>
          <p className="text-[0.7rem] md:w-[40%] sm:pt-4 md:pt-0">
            Edwin is passionate about web standards. He's a quick learner with
            endless creative energy.
            <br />
            <br />
            In his spare time, he enjoys music, exercising, open source
            technology, and movies.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default TeamMembers;
