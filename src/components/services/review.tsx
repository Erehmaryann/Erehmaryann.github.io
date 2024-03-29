import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "./variants";
import { LeftArrow, LeftArrowActive, RightArrow } from "./icons";
import reviewDarkBg from "../../assets/review-dark-bg.webp";
import reviewLightBg from "../../assets/review-light-bg.webp";
import { reviewData } from "./review-data";
import { RatingStar } from "rating-star";

function Review() {
  const [slider, setSlider] = React.useState<number>(0);

  const increaseSlide = () => {
    if (slider < reviewData.length - 1) {
      setSlider((prevState) => prevState + 1);
    } else {
      setSlider(0);
    }
  };

  const decreaseSlide = () => {
    if (slider > 0 && slider <= reviewData.length) {
      setSlider((prevState) => prevState - 1);
    } else {
      setSlider(0);
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center w-full sm:pb-8 md:pb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="py-[35px] md:text-center md:w-[500px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <h3 className="font-[700] text-[#333535] pb-[2px] text-[1.8rem] dark:text-white">
          What our customer says
        </h3>
        {/* <p className="text-[#6C6C6C] font-[500] text-[0.7rem] dark:text-white">
          The point of using Lorem Ipsum is that it has.
        </p> */}
      </motion.div>
      <motion.div
        className="flex flex-nowrap h-[300px] justify-center items-center md:w-[100%] pt-[15px]"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <button
          type="button"
          disabled={slider === 0}
          className="cursor-pointer"
          onClick={decreaseSlide}
        >
          {slider === 0 ? <LeftArrow /> : <LeftArrowActive />}
        </button>
        <div className="relative flex justify-center items-center flex-col h-[100%] md:w-[45%] sm:w-[100%]">
          <img
            className="absolute z-0 h-[100%] w-[90%] dark:hidden"
            src={reviewLightBg}
            alt="review bg"
          />
          <img
            className="absolute hidden dark:block z-0 h-[100%] w-[90%]"
            src={reviewDarkBg}
            alt="review bg"
          />
          <div className="h-[30%] flex justify-center items-center flex-col pt-4">
            <img
              src={reviewData[slider].customerImg}
              alt="customer"
              width={50}
              className="z-10"
            />
            <h5 className="z-10 text-[#333535] text-[0.8rem] font-[600] pt-4 dark:text-white">
              {reviewData[slider].customerName}
            </h5>
            <h6 className="z-10 text-[#0A72D2] text-[0.8rem] font-[500] dark:text-[#ff9c00]">
              {reviewData[slider].jobTitle}
            </h6>
            <p className="z-10 text-[#919191] dark:text-[#ff9c00]  font-[400] py-3 text-[0.7rem] text-center md:w-[60%] ">
              {reviewData[slider].reviewText}
            </p>
            <RatingStar
              numberOfStar={5}
              maxScore={5}
              colors={{ mask: "#ff9c00" }}
              id={reviewData[slider].id}
              rating={reviewData[slider].count}
            />
          </div>
        </div>
        <button
          type="button"
          className="cursor-pointer"
          onClick={increaseSlide}
        >
          <RightArrow />
        </button>
      </motion.div>
    </motion.section>
  );
}

export default Review;
