import React from "react";
import executiveMember from "../../assets/executive.png";

function TeamMembers() {
  return (
    <div className="sm:p-4 md:w-[68%] sm:w-[100%] mb-10">
      <h2 className="text-[#000] dark:text-[#fff] font-[700] text-[1.5rem] text-center pb-[35px]">
        Team Members
      </h2>
      <div className="flex flex-col w-full">
        <div className="flex w-[100%]">
          <div className="border-l-[6px] border-[#000] w-[2%] dark:border-[#fff]"></div>
          <div className="w-[2%]"></div>
          <div
            className="flex w-[96%] md:justify-around sm:justify-between
        bg-[#F8F8F8] dark:bg-[#999999] text-[#000] dark:text-white rounded-[10px] p-2"
          >
            <h6 className="font-[700] text-[0.9em]">John Doe</h6>
            <h6 className="font-[700] text-[0.9em]">Designer</h6>
          </div>
        </div>
        <div className="flex md:justify-around sm:justify-between flex-wrap py-7 text-[#000] dark:text-white w-full">
          <div className="md:w-[10%] sm:w-full">
            <img
              src={executiveMember}
              alt="team members"
              className="md:w-[300px] sm:w-full"
            />
          </div>
          <p className="text-[0.7rem] md:w-[40%] sm:pt-4 md:pt-0">
            In this session, we will get our hands into the color, learn the
            basics of user interface design with colored hands, and learn about
            various interface design tools.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-[100%]">
          <div className="border-l-[6px] border-[#000] w-[2%] dark:border-[#fff]"></div>
          <div className="w-[2%]"></div>
          <div
            className="flex w-[96%] md:justify-around sm:justify-between
        bg-[#F8F8F8] dark:bg-[#999999] text-[#000] dark:text-white rounded-[10px] p-2"
          >
            <h6 className="font-[700] text-[0.9em]">Maryann</h6>
            <h6 className="font-[700] text-[0.9em]">Frontend Developer</h6>
          </div>
        </div>
        <div className="flex md:justify-around sm:justify-between flex-wrap py-7 text-[#000] dark:text-white w-full">
          <div className="md:w-[10%] sm:w-full">
            <img
              src={executiveMember}
              alt="team members"
              className="md:w-[300px] sm:w-[100%]"
            />
          </div>
          <p className="text-[0.7rem] md:w-[40%] sm:pt-4 md:pt-0">
            In this session, we will get our hands into the color, learn the
            basics of user interface design with colored hands, and learn about
            various interface design tools.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
