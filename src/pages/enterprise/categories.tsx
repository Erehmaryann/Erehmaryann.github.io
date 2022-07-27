import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "../../components/services/variants";

import { categoriesData } from "./categories-data";

function Categories() {
  return (
    <motion.div
      className="w-screen style-list md:py-14 sm:py-10 md:px-0 sm:px-4 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="md:w-[65%] flex flex-col justify-center md:items-center sm:items-start dark:text-white md:text-center pb-14">
        <motion.h2
          className="md:text-[2.6rem] sm:text-[2rem] font-[600] leading-10 whitespace-normal"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          Our Enterprise System Categories
        </motion.h2>
        <motion.p
          className="pt-[21px] text-[0.9rem] font-[300]"
          variants={fadeInDown}
          initial="initial"
          animate="animate"
        >
          We identify business needs by engaging our clients through
          presentations, by doing so, we create, build and host responsive
          websites with the latest technologies tailored to exceed your
          requirements and expectations while also keeping SEO in mind. We
          operate a 24 hours support team to cater for all site issues.
        </motion.p>
      </div>
      {categoriesData.map((category) => (
        <div
          className="relative md:w-[65%] text-[0.9rem] sm:w-[100%] rounded-[20px] shadow-lg bg-white dark:bg-[#A4A4A4] p-8 dark:text-white mb-8"
          key={category.id}
        >
          <motion.div
            className="absolute bg-[#FF9C00] px-[20px] py-[8px] rounded-[15px] font-[600] md:left-[-60px] top-[-10px] whitespace-normal"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            {category.title}
          </motion.div>
          <motion.p
            className="font-[300] py-6"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            {category.body}
          </motion.p>
          <motion.ul
            className="style-list list-none pl-4 font-[400] pt-1"
            variants={fadeInDown}
            initial="initial"
            animate="animate"
          >
            <li>{category.listItem1}</li>
            <li>{category.listItem2}</li>
            <li>{category.listItem3}</li>
            {category.listItem4 !== "" && <li>{category.listItem4}</li>}
          </motion.ul>
        </div>
      ))}
    </motion.div>
  );
}

export default Categories;
