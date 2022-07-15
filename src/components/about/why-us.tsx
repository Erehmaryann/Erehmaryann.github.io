import React from "react";
import update from "../../assets/update.png";
import trust from "../../assets/trust.png";
import award from "../../assets/award.png";
import hours from "../../assets/hours.png";

function WhyUs() {
  return (
    <section className="flex flex-col items-center w-full sm:p-4 md:py-[100px]">
      <div className="pt-[21px] pb-[35px] md:text-center md:w-[300px]">
        <h3 className="font-[700] text-[#333535] pb-[8px] text-[1.8rem]">
          Why choosing us?
        </h3>
        <p className="text-[#6C6C6C] font-[500] text-[0.7rem]">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution.
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center md:w-[50%] md:pb-[40px]">
        <div className="flex items-center">
          <img
            src={update}
            alt="lifetime update"
            className="sm:ml-[-12px] md:ml-0"
          />
          <div className="flex flex-col md:w-[220px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              Lifetime Update
            </h6>
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={trust}
            alt="trust worthy icon"
            className="sm:ml-[-12px] md:ml-0"
          />
          <div className="flex flex-col md:w-[220px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              Trustworthy Company
            </h6>
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center md:w-[50%]">
        <div className="flex items-center">
          <img
            src={award}
            alt="award winning icon"
            className="sm:ml-[-12px] md:ml-0"
          />
          <div className="flex flex-col md:w-[220px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              Award Winning
            </h6>
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={hours}
            alt="support icon"
            className="sm:ml-[-12px] md:ml-0"
          />
          <div className="flex flex-col md:w-[220px]">
            <h6 className="text-[#333535] font-[700] text[0.9rem]">
              24 Hours Support
            </h6>
            <p className="italic text-[#909090] text-[0.8rem] font-[600] dark:text-[#000]">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
