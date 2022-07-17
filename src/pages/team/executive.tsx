import React from "react";
import { executiveData1, executiveData2 } from "./executive-data";

function Executive() {
  return (
    <div className="bg-[#FBFBFA] dark:bg-[#A4A4A4] md:p-[44px] sm:p-8 rounded-[10px] md:w-[65%] md:mb-[100px] sm:mx-4 sm:mb-10">
      <h2 className="text-[#000] dark:text-[#fff] font-[700] text-[1.5rem] text-center pb-[35px]">
        Executives
      </h2>
      <div className="flex flex-wrap justify-between w-full">
        {executiveData1.map((item) => (
          <div
            className="flex flex-col sm:pb-6 md:pb-6 sm:w-[100%] md:w-auto"
            key={item.id}
          >
            <img
              src={item.img}
              alt="execute member"
              className="sm:w-full md:w-[150px]"
            />
            <h3 className="text-[#000] text-[0.8em] font-[700] pt-4 whitespace-normal">
              {item.name}
            </h3>
            <p className="font-[400] text-[#000] text-[0.6em] whitespace-normal">
              {item.role}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-between w-full">
        {executiveData2.map((item) => (
          <div
            className="flex flex-col sm:pb-6 md:pb-6 sm:w-[100%] md:w-auto"
            key={item.id}
          >
            <img
              src={item.img}
              alt="execute member"
              className="sm:w-full md:w-[150px]"
            />
            <h3 className="text-[#000] text-[0.8em] font-[700] pt-4 whitespace-normal">
              {item.name}
            </h3>
            <p className="font-[400] text-[#000] text-[0.6em] whitespace-normal">
              {item.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Executive;
