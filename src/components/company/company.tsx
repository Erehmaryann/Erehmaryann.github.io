import React from "react";
import people from "../../assets/people.png";
import v from "../../assets/v.png";
import lightV from "../../assets/light-v.png";
import ladies from "../../assets/ladies.png";
import Button from "../common/button/button";

function Company() {
  return (
    <section
      id="company"
      className="min-h-[100vh] w-screen flex justify-center items-center dark:bg-[#6C6C6C] bg-[#FBFBFA] md:py-[100px]"
    >
      <div className="h-full w-full flex justify-center flex-col items-center sm:p-4 md:px-0 md:pb-0">
        <div className="sm:pt-8 md:text-center">
          <h1 className="text-[#333535] dark:text-white text-[1.8rem] font-[700] leading-[26px]">
            Customer trust is our goal
          </h1>
          <p className="text-[#6C6C6C] dark:text-white pt-2 text-[0.7rem] font-[500]">
            The point of using Lorem Ipsum is that it has.
          </p>
        </div>
        <div className="flex h-[60%] justify-between items-center sm:flex-col-reverse md:flex-row md:w-[55%] md:mt-[0px] sm:mt-[35px]">
          <div className="md:w-[50%] sm:w-[100%] items-start sm:mt-[16px] md:h-auto sm:h-[70%]">
            <img
              src={people}
              alt="people"
              className="w-full md:h-auto sm:h-full m-[-35px]"
            />
          </div>
          <div className="relative flex justify-center flex-col h-[30%] md:w-[45%] sm:w-[100%] sm:pb-8 md:py-4">
            <img
              className="absolute z-0 h-full dark:hidden"
              src={lightV}
              alt="vision bg"
            />
            <img
              className="hidden absolute dark:block z-0 h-full"
              src={v}
              alt="vision bg"
            />
            <h4 className="z-10 dark:text-[#F6D021] text-[0.9rem] font-[700] my-[-8px]">
              Company Vision
            </h4>
            <p className="z-10 text-[0.7rem] font-[600] text-[#909090] dark:text-[#fff] italic pt-[8px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more.
            </p>
          </div>
        </div>
        <div className="md:w-[55%] flex justify-between items-center sm:pb-14 md:pb-[100px] h-auto md:flex-row sm:flex-col sm:pt-[35px]">
          <div className="flex justify-center items-start flex-col h-[40%] md:w-[45%] sm:w-[100%] sm:pb-8 md:mt-10">
            <h3 className="text-[1.8rem] font-[700] text-[#333535] dark:text-[#fff]">
              Company Mission
            </h3>
            <p className="text-[#6C6C6C] dark:text-white font-[500] text-[0.7rem] pt-2 leading-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
            <a href="/">
              <Button
                type="button"
                className="bg-[#D4AF37] drop-shadow-md   
                rounded-[10px] py-[14px] px-[30px] mt-[20px] text-white text-[0.8rem]"
              >
                Learn About
              </Button>
            </a>
          </div>
          <div className="md:w-[50%] sm:w-[100%] items-start sm:mt-12 md:h-auto sm:h-[60%]">
            <img
              src={ladies}
              alt="ladies"
              className="w-full md:h-auto sm:h-full sm:my-[-10px] md:my-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
